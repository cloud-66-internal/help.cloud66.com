
var resultTemplate = Hogan.compile(
    '<div class="SearchResults-item">' +
        '<a href="{{url}}" class="SearchResults-link">' +
            '<h3 class="SearchResults-subTitle">{{title}}</h3>' +
            '{{#description}}<p class="SearchResults-text">{{description}}</p>{{/description}}{{^description}}<p class="SearchResults-text">Answered on the Cloud 66 community forum</p>{{/description}}' +
            '{{#product}}<div class="SearchResults-ico SearchResults-ico--{{product}}"></div>{{/product}} {{^product}} <div class="SearchResults-ico SearchResults-ico--community"></div> {{/product}}' +
            '{{#product}}<div class="Tag Tag--lrg">{{product}}</div>{{/product}} {{^product}} <div class="Tag Tag--lrg">Community</div> {{/product}}'+
        '</a>' +
    '</div>');


var searchResultRenderFunction = function(documentType, item) {
    var data = {
        url: item['url'],
        title: item['title'],
        description: item['description'],
        product: item['product'],
    };

    return resultTemplate.render(data);
};


var getQuery = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    return query;
}


$(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const product = urlParams.get('product');
    if ( product != null ) {
        productName = product.charAt(0).toUpperCase() + product.slice(1);
        $('#search-query-home').swiftypeSearch({
            resultContainingElement: '#js_search_results_list',
            engineKey: 'bN_9bsG93qxs_9H4Jc27',
            renderFunction: searchResultRenderFunction,
            perPage: 20,
            filters: {
                "page" : {
                    "product" : [productName, 'Discourse']
                }
            }
        });
    } else {
        $('#search-query-home').swiftypeSearch({
            resultContainingElement: '#js_search_results_list',
            engineKey: 'bN_9bsG93qxs_9H4Jc27',
            renderFunction: searchResultRenderFunction,
            perPage: 20,
        });
    }


    const query = getQuery();
    if ( query ) {
        $('#search-query-home').val(query);
        $('#search-form').submit();
        $('#js_search_term').html( query );
    }

    $( "#search-form" ).submit(function( event ) {
        var searchTerm = $('#search-query-home').val();
        $('#js_search_term').text( searchTerm );
    });
});
