const searchInputEl = document.getElementById("searchInput");
const searchResultsEl = document.getElementById("searchResults");
const spinnerEl = document.getElementById("spinner");
const searchButtonEl = document.getElementById("searchButton");
const searchResultsSection = document.getElementById("searchResultsSection");

let isSearching = false;

const createAndAppendSearchResult = (result) => {
    const {
        link,
        title,
        description
    } = result;

    const resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

    const titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.rel = "noopener noreferrer";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

    const titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    const urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.rel = "noopener noreferrer";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);

    const linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);

    const descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);

    searchResultsEl.appendChild(resultItemEl);
};

const displayResults = (searchResults) => {
    spinnerEl.classList.add("d-none");
    searchInputEl.disabled = false;
    searchButtonEl.disabled = false;
    isSearching = false;

    if (searchResults.length === 0) {
        const noResultsEl = document.createElement("div");
        noResultsEl.classList.add("no-results");
        noResultsEl.textContent = "No results found. Try a different search term.";
        searchResultsEl.appendChild(noResultsEl);
        return;
    }

    for (const result of searchResults) {
        createAndAppendSearchResult(result);
    }
};

const showError = (message) => {
    spinnerEl.classList.add("d-none");
    searchInputEl.disabled = false;
    searchButtonEl.disabled = false;
    isSearching = false;

    const errorEl = document.createElement("div");
    errorEl.classList.add("error-message");
    errorEl.textContent = message;
    searchResultsEl.appendChild(errorEl);
};

const performSearch = async () => {
    const searchInput = searchInputEl.value.trim();

    // Validate input
    if (searchInput === "") {
        return;
    }

    // Prevent multiple simultaneous searches
    if (isSearching) {
        return;
    }

    isSearching = true;
    searchResultsSection.style.display = "block";
    spinnerEl.classList.remove("d-none");
    searchResultsEl.textContent = "";
    searchInputEl.disabled = true;
    searchButtonEl.disabled = true;

    // Encode the search input for URL safety
    const encodedSearchInput = encodeURIComponent(searchInput);
    const url = `https://apis.ccbp.in/wiki-search?search=${encodedSearchInput}`;
    const options = {
        method: "GET"
    };

    try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        const {
            search_results
        } = jsonData;
        displayResults(search_results);
    } catch (error) {
        console.error("Error fetching data:", error);
        showError("Something went wrong. Please check your connection and try again.");
    }
};

const searchWikipedia = (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
};

// Event listeners
searchInputEl.addEventListener("keydown", searchWikipedia);
searchButtonEl.addEventListener("click", performSearch);