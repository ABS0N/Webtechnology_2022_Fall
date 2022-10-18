const API_KEY = "GIfwbyhbgVXoTbzMaVAUi7SfVs8gT7EWQQh7vS9U"


async function search() {

    const inputElement = document.getElementById("searchTerm");
    const response = await fetch(`https://api.watchmode.com/v1/search/?apiKey=${API_KEY}&search_field=name&search_value=${inputElement.value}`);
    const responseBody = response.json();
    const titles = responseBody.title_results;
    if (titles) {
        fillSearchResultsList(titles);
    }
}

function fillSearchResultsList(titles) {
    const searchResultsElement = document.getElementById("searchResults");
    titles.forEach(title => {
        const listItem = document.createElement("li");
        listItem.textContent = title.name;
        searchResultsElement.append(listItem);
    });
}