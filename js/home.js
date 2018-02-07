$(function () {
    $(document).on( 'keyup', 'input.ais-search-box--input', function(){
        var searchTerm = $(this).val();
        searchTerm.length > 1 ? $('#js_hits_result').fadeIn() : $('#js_hits_result').hide();
    });
    $(document).on( 'keydown', 'input.ais-search-box--input', function( event ){
        if ( event.keyCode == 13 ) { // return key
            event.preventDefault();
            return false;
        }
    });
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            $('#js_hits_result').hide();
            $('input.ais-search-box--input').val('');
        }
    });
    $(document.body).click( function(e) {
        if ( $(e.target).parents('.ais-hits--item').length === 0 ) {
            $('#js_hits_result').hide();
        }
    });
});