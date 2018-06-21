/*
 * Functions
 */

// Appends the given search result to the ul element on the page
function appendSearchResult(hit) {
    const [title, content, collection, url] = [hit._highlightResult.title.value, hit._highlightResult.content.value, hit.collection, hit.url];
    const host = window.location.host;
    const liString = `<li class="SearchResults-item"> <a class="SearchResults-link" href="http://${host}${url}.html">  <h3 class="SearchResults-subTitle">${title}</h3> <p class="SearchResults-text"> ${content} </p></a><a href="http://${host}/${collection}"><span class="SearchResults-ico SearchResults-ico--${collection}"></span> <span class="Tag Tag--lrg">${collection}</span> </a> </li>`;

    // create DOM element from string
    const template = document.createElement('template');
    template.innerHTML = liString;

    const li = template.content.firstChild;
    document.getElementById('search-results-container').appendChild(li);
}

// returns an object containing the query params (key,value)
// keys: q, idx, product (optional)
function extractQueryParams() {
    //  get the query part of the url
    var rawQueryParams = window.location.search.split('&');
    rawQueryParams[0] = rawQueryParams[0].replace('?', '');
    const queryParams = {};
    rawQueryParams.forEach((param) => {
        const [key, value] = param.split('=');
        queryParams[key] = value;
    });

    return queryParams;
}

function getH1(queryParams) {
	const product = queryParams['product'];
	var productHtml = "all products";
	if (product) {
		productHtml = `<i>${product}</i>`;
	}
	return `Searched ${productHtml} for <b>${queryParams['q']}</b>`;
}


/*
 * Queries Algolia when the page is loaded.
 */
document.addEventListener("DOMContentLoaded", function(event) {
    queryParams = extractQueryParams();

    // updating h1
    document.getElementById('title').innerHTML = getH1(queryParams);

    const algoliaClient = algoliasearch('TXUI53WBEH', 'abdf284bf870bdd1beff87179eadcb07');
    const index = algoliaClient.initIndex(queryParams['idx']);

    console.log('The query is: ' + queryParams['q']);

    const searchParams = {query: queryParams['q']};
    // if there is the product: add it to the query to filter the results
    if (queryParams['product']) {
        console.log(`Product to query on: ${queryParams['product']}`);
        searchParams['facetFilters'] = [`collection:${queryParams['product']}`];
        console.log(`Search parameters: ${JSON.stringify(searchParams)}`);
    }

    // Perform the research, display the results
    index.search(searchParams, (err, content) => {
        if (err) throw err;

        if (content.hits.length === 0) {
            const p = document.createElement('p');
            p.innerHTML = `No result for '${queryParams['q']}'`;

            const product = queryParams['product'];
            if (product) {
                p.innerHTML += ` for the product '${product}'.`;
            } else {
                p.innerHTML += ' in any of the products.';
            }

            document.getElementById('search-results-container').appendChild(p);
        } else {
            content.hits.forEach((hit) => appendSearchResult(hit));
        }
    });

    // If the URL contains a product name, it is added as a hidden input for the research.
    const form = document.getElementById('search-form');
    form.addEventListener('submit', (event) => {
        const product = extractQueryParams()['product'];
        if (product) {
            const hiddenInput = `<input type="hidden" name="product" value="${product}" />`;
            const inputTemplate = document.createElement('template');
            inputTemplate.innerHTML = hiddenInput;
            document.getElementById('search-form').appendChild(inputTemplate.content.firstChild);
        }
    });
});
