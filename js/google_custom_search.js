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

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase();
});

Handlebars.registerHelper('global', window);

C66.HelpPager = {
	bindEvents: function() {
		$(document).on('click', 'a.js_next_link', function(e){
			e.preventDefault();
			$("#js_search_results_list").html('<p class="SearchResults-text">Loading next page</p>');
			$("html, body").animate({ scrollTop: 0 }, "slow");
	        $.getJSON( this.href, function( response ) {
				console.log('success got some paging results');
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
	console.log(json);
    var compiledTemplate = Handlebars.getTemplate("searchResults");
    var searchResultsHtml = compiledTemplate(json);
    $("#js_search_results_list").html(searchResultsHtml);
	$('#search-query-home').val(q);

	$('#js_search_results_paging').html('');

	console.log('render next page link')
	if ( json.queries.nextPage ) {
		if ( json.queries.nextPage[0].startIndex ) {
			var next = json.queries.nextPage[0].startIndex;
			var nextLink = '<div class="Paging Paging-next"><a class="js_next_link" href="https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBKWduLZEHa_qmlnVlpd2JzSdLDDoY5uD4&cx=005542367771770094844:wfitaj44ofm&q='+q+'&start='+next+'">Next</a></div>';
			$('#js_search_results_paging').html(nextLink);
		}
	}

	console.log('render prev page link')
	if ( json.queries.previousPage ) {
		var prev = json.queries.previousPage[0].startIndex
		var nextLink = '<div class="Paging Paging--prev"><a class="js_next_link" href="https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBKWduLZEHa_qmlnVlpd2JzSdLDDoY5uD4&cx=005542367771770094844:wfitaj44ofm&q='+q+'&start='+prev+'">Previous</a><span style="margin:0 10px">•</span> </div>';
		$('#js_search_results_paging').prepend(nextLink);
	}

	if ( json.queries.request ) {
		var count = json.queries.request[0].count;
		var pageStart = json.queries.request[0].startIndex;
		var pageEnd =  pageStart + count - 1;
		var pageInfo = " Displaying " + pageStart + " to " + pageEnd;
		console.log(pageInfo);
		$('.SearchResults-meta').append(pageInfo);
	}
  }
};
