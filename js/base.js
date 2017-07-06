var CB = window.CB || {};

Handlebars.c66 = window.Handlebars.c66 || {};

Handlebars.c66.config = {
    tmplPath:      '/js/tmpl/',
    tmplExtention: '.handlebars'
};

var $headers = $('.header').click(function () {
	$(this).find('span').text(function (_, value) {
		return value == '\u25B6' ? '\u25BC' : '\u25B6'
	});
	$(this).nextUntil('tr.header').slideToggle(100, function () {});
});
$headers.find('span').text('\u25B6')
$("#fields tr:not(:first-child)").hide();

Handlebars.getTemplate = function( name ) {
    if ( Handlebars.templates === undefined || Handlebars.templates[name] === undefined ) {
        $.ajax({
            url : Handlebars.c66.config.tmplPath + name + Handlebars.c66.config.tmplExtention,
            datatype: 'text/javascript',
            success : function(response, status, jqXHR) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                //Handlebars.templates[name] = Handlebars.compile(jqXHR.responseText);
                Handlebars.templates[name] = Handlebars.compile(response);
            },
            async : false
        });
    }
    return Handlebars.templates[name];
};


CB.help = ( function( $, window, document ) {

    "use strict";
    /*jshint devel:true, jquery:true*/
    /*global alert $ document window*/

    var $el = {
        homeSearchInput :     $('#q'),
        globalSearchInput :   $('#q-top'),
        autoCompleteFields :  $('input.js-typeahead'),
        searchForm :          $('form.js-search-form')
    };

    var config = {
        typeaheadAction: 'https://app.cloud66.com/help/autocomplete?query=',
        searchAction:    'https://app.cloud66.com/help/search.json'
    };

    var init = function() {
        console.log( 'init help' );

        navHighlight();
        bindEvents();
        catFormat();

        if ( $('body').hasClass('home') ) {
            homeSearch();
        }
        if ( $('body').hasClass('search') ) {
            console.log('search results');
            searchResults();
        }
    };

    var navHighlight = function() {
        // Add Active Class To Current Link
        var url = window.location.pathname;
        $('nav.aside-mod a[href="'+url+'"]').parent().addClass('active');
    };

    var catFormat = function() {
        $('.js-format-cat').each(function(){
            var $el = $(this),
                h = $el.html(),
                friendlyTitle = h.replace(/-/g,' ');
            $el.html( friendlyTitle );
        });
    };

    var bindEvents = function() {

        //$el.autoCompleteFields.typeahead( typeAhead );

        $el.searchForm.submit(function() {
            var form = this;
            postSeach( form );
            return false;
        });

        $el.homeSearchInput.change(function() {
          $el.searchForm.submit();
        });

        $el.globalSearchInput.change(function(){
            $('.header-nav-bar form').submit();
        });

        // $(document.body).on('click', 'nav.crumbs a', function(){
        //     window.history.go(-1);
        // });

        /*
        * Necessary hack because WebKit fires a popstate event on document load
        * https://code.google.com/p/chromium/issues/detail?id=63040
        * https://bugs.webkit.org/process_bug.cgi
        */
        window.addEventListener('load', function() {
          setTimeout(function() {
            window.addEventListener('popstate', function() {
                console.log('**** popstate fired - do some navigation ****');
                var path = window.location.pathname;
                if (  path == '/getting-started/faq.html' ) {
                    return;
                }
                goHome();
            });
          }, 0);
        });

    };

    var goHome = function() {
        window.location.href = '/';
    };

    var typeAhead = {
         source: function( typeahead, query ) {
            var searchAction = config.typeaheadAction + query;

            $.ajax({
                url: searchAction
            }).done(function (data) {
                console.log( data );
                if ( data ) {
                    typeahead.process( data.suggestions );
                }
            }).fail(function (jqXHR, textStatus) {
                console.log( jqXHR );
                console.log( textStatus );
            });
        }
    };

    var postSeach = function( form ) {
        var searchTerm = $( form ).serialize();
        var searchUrl = '/search.html?'+searchTerm;
        history.pushState(null, null, searchUrl);

        $.ajax({
            url:  config.searchAction,
            type: form.method,
            data: searchTerm,
            beforeSend: function () {
                $('body').addClass('loading');
            },
            complete: function () {
                $('body').removeClass('loading');
            },
            success: function( data ) {
               renderSearchResults( data );
            },
            error: function( jqXHR ) {
                console.log( jqXHR );
            }
        });
    };

    var renderSearchResults = function( response ) {
        console.log( response.results );
        if ( !response.results.length ) {
            return;
        }

        var compiledTemplate   = Handlebars.getTemplate('searchResults');
        var searchResultsHtml  = compiledTemplate( response );

        if ( $('#js-primary-content').length ) {
            $('#js-primary-content').html( searchResultsHtml );
        } else {
            $('article.article').html( searchResultsHtml );
        }

    };

    var homeSearch = function() {
        var $topSearchInput = $('.top-search');
        $el.homeSearchInput.appear();

        $(document.body).on('appear', '#q', function(e) {
            $topSearchInput.css( 'opacity', 0 );
        });

        $(document.body).on('disappear', '#q', function(e) {
            $topSearchInput.css( 'opacity', 1 ).addClass('animated pulse');
            $('#q-top').focus();
        });
    };

    var searchResults = function() {
        var searchAction = config.searchAction + window.location.search;
        $.getJSON( searchAction, function( data ) {
            renderSearchResults( data );
        });
    };

    // Return public
    return {
        init: init
    };

})( jQuery, this, document );
