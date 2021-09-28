/*
 * Functions
 */

// Appends the given search result to the ul element on the page
function appendSearchResult(hit) {
	const [title, content, collection, url, categories] = [hit._highlightResult.title.value, hit._highlightResult.content.value, hit.collection, hit.url, hit.categories];
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

function createH1(queryParams) {
	const query = queryParams['q'];
	return `Search all products for <b>${query}</b>`
}

// Create the title of the page, with the current product displayed.
// When the users hover the list of the other products is displayed.
// When the users clicks on one of the products, the form is submitted for this product.
function createH1Enhanced(queryParams) {
	const productQuery = queryParams['product'];

	const products = ['All products', 'Rails', 'Node', 'Maestro', 'Skycap', 'Prepress'];

	const productDisplayed = productQuery ? productQuery.charAt(0).toUpperCase() + productQuery.slice(1) : 'All products';
	products.splice(products.indexOf(productDisplayed), 1);

	var otherProducts = '<div id="other-products"><ul>';
	products.forEach((product) => {
		const value = product.replace(' ', '_').toLowerCase();
		otherProducts += `<li value="${value}"> ${product} </li>`;
	});
	otherProducts += '</ul></div>'

	const productSelection = `<div id="product-display"> <span id="product-name">${productDisplayed}</span> ${otherProducts} </div>`;

	return `Searched ${productSelection} for <b>${queryParams['q']}</b>`;
}

function createHiddenProductInput(product) {
	const hiddenInput = `<input id='input-product' type="hidden" name="product" value="${product}" />`;
	const inputTemplate = document.createElement('template');
	inputTemplate.innerHTML = hiddenInput;
	return inputTemplate.content.firstChild;
}

// Changes the product on which to query
// Deleting the input if exists if the user clicked on "All product"
function changeProductQuery(product) {
	const form = document.getElementById('search-form');
	const productInput = document.getElementById('input-product');

	if (product === 'all_products') {
		if (productInput) {
			productInput.parentNode.removeChild(productInput);
		}
	} else {
		if (productInput) {
			productInput.value = product;
		} else {
			form.appendChild(createHiddenProductInput(product));
		}
	}
}

// on click on another product: perform the search on the selected product
function submitFormWithNewProduct(event) {
	console.log('submitFormWithNewProduct triggered');
	const product = event.currentTarget.attributes.value.value;
	changeProductQuery(product);

	const searchInput = document.getElementById('search-query-home');
	searchInput.value = extractQueryParams()['q'];

	const form = document.getElementById('search-form');
	form.submit();
}

function displayOtherProducts() {
	// Displaying list of other products on hover, on click: perform the research for this product.
	const div = document.getElementById('product-display');
	div.addEventListener('mouseover', (event) => {
		document.getElementById('other-products').style.display = 'block';
	});

	div.addEventListener('mouseout', (event) => {
		document.getElementById('other-products').style.display = 'none';
	});

	// when the user clicks on the product: the search is performed for this product
	const productsList = document.getElementById('other-products').getElementsByTagName('li');
	for (var i = 0; i < productsList.length; i++) {
		productsList[i].addEventListener('click', submitFormWithNewProduct);
	}
}

/*
 * Queries Algolia when the page is loaded.
 */
document.addEventListener('DOMContentLoaded', function(event) {
	queryParams = extractQueryParams();

	// updating h1
	document.getElementById('title').innerHTML = createH1(queryParams);

	// Performing the search with the parameters received in the query parameters.
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
			p.innerHTML = 'No result.';

			document.getElementById('search-results-container').appendChild(p);
		} else {
			content.hits.forEach((hit) => appendSearchResult(hit));
		}
	});

});
