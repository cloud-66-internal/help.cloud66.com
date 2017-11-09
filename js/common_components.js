var CB = window.CB || {};

CB.Common = CB.common || {};

CB.Common.inlineTabs = (function ( $, window, undefined ) {

    "use strict";

    var $el = {
        tabContent:      $('.js_tab_content'),
    };

    var config = {
        inited: false,
        state: null,
        titleText: $('title').text().trim()
    };

    var init = function() {
        if ( $('.js_tabs').length ) {
            console.log('=== init inlineTabs ===');
        }

        // hide tabs except the first
        // $el.tabContent.addClass('is-hidden').filter(':first').removeClass('is-hidden');

        bindEvents();
    };

    var bindEvents = function() {
        $(document).on('click', '.js_tabs a', function() {
            var $tab = $(this).parent(),
                self = this;

            switchTabs( $tab, self );
            return false;
        });
    };

    var switchTabs = function( $tab, self ) {
        var $context = $tab.parents('.Tabs');
        var $tabsPanels = $context.find('.js_tab_content');

        $tab.siblings().removeClass('active').end().addClass('active');
        $tabsPanels.hide().filter( self.hash ).fadeIn( 350 );
    };

    return {
        init: init,
    };

})( window.jQuery, window );

CB.Common.inlineTabs.init();

$(document).ready(function($) {
    $('.accordion-toggle').click(function(){
      $('.accordion-toggle').removeClass('active');
      $(this).addClass('active');
      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $(".accordion-content").not( $(this).next() ).slideUp('fast');

    });
});

