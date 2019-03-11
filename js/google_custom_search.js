var C66 = window.C66 || {};


/*
    IMPORTANT!
    Liquid & handlebars DO NOT mix!
    Therefore handlebars templates need to be compiled from separate files.
    template to render the search results, this is configured below namespaced to Handlebars
*/

Handlebars.c66 = window.Handlebars.c66 || {};

Handlebars.c66.config = {
    tmplPath: '/js/tmpl/',
    tmplExtention: '.handlebars'
};

Handlebars.getTemplate = function (name) {
    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        $.ajax({
            url: Handlebars.c66.config.tmplPath + name + Handlebars.c66.config.tmplExtention,
            datatype: 'text/javascript',
            success: function (response, status, jqXHR) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(response);
            },
            async: false
        });
    }
    return Handlebars.templates[name];
};

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('global', window);

C66.HelpPager = {
	bindEvents: function() {
		console.log('hello worldz');
		
		$(document).on('click', 'a.js_next_link', function(e){
			e.preventDefault();
	        $.getJSON( this.href, function( response ) {
				console.log('success got some paging results');
				$("#js_search_results_list").html('<p class="SearchResults-text">Loading next page</p>');
				C66.HelpSearch.renderSearchResultsTemplate(response, $('#search-query-home').val());
	        })
	        .fail(function(jqXHR, textStatus, errorThrown) {
	            console.error( 'Problem with paging' );
				console.log("error " + textStatus);
	        });
		});  
	}
}

C66.HelpPager.bindEvents();

C66.HelpSearch = {
  init: function(json) {
	var self = this;	  
    console.log('HelpSearch: Render the Search results handlebars templates');
    console.log(json);
    var url_string = window.location.href;
    var url = new URL(url_string);
    var q = url.searchParams.get("q");
    
    $('.SearchResults-title').text(q);
	
	if (json.error) {
		var error = json.error.errors[0].message;
		console.log('There was an issue with the search results.')
		console.log(error)
		return false;
	}

    if (json.searchInformation.totalResults == "0") {
		console.log('render the error template');
        this.renderNoResultsTemplate(q);
    } else {
		console.log('render the search results template');
        this.renderSearchResultsTemplate(json, q);
        // this.renderSummaryTemplate(json);
    }
  },

  renderNoResultsTemplate() {
      var message = "<p style='padding-top: 3em;font-size: 24px'>Sorry, we couldn't find any search results for <strong>" + q + "</strong></p>" + "<p style='padding-bottom: 6em'>Try another search term or browse through the documentation. If you still can't find what you need. <a href='http://app.cloud66.com/support_tickets/new'>Please get in touch</a></p>";
      
      $("#js_search_results_container").html(message);
  },

  renderSummaryTemplate(json){
      var compiledTemplate = Handlebars.getTemplate("searchSummary");
      var searchSummaryHtml = compiledTemplate(json);
      $("#js_search_title").append(searchSummaryHtml);
  },

  renderSearchResultsTemplate(json, q) {
	console.log('render the search results template');
    var compiledTemplate = Handlebars.getTemplate("searchResults");
    var searchResultsHtml = compiledTemplate(json);
    $("#js_search_results_list").html(searchResultsHtml);
	$('#search-query-home').val(q);
	
	if ( json.queries.nextPage ) {
		var next = json.queries.nextPage[0].startIndex
		console.log(next);
		console.log(window.script.src+'&start='+next)
		var nextLink = '<div class="Paging" style="padding: 40px 0"><a class="js_next_link" href="https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBKWduLZEHa_qmlnVlpd2JzSdLDDoY5uD4&cx=005542367771770094844:wfitaj44ofm&q=assets&start='+next+'">Next</a></div>';
		$('#js_search_results_paging').html(nextLink);
	}
  }
};

