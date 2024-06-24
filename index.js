let searchInput = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");


function addResult(result) {
    let {
        link,
        title,
        description
    } = result;

    let container = document.createElement("div");
    container.classList.add("result-item");

    let link1 = document.createElement("a");
    link1.classList.add("result-title");
    link1.href = link;
    link1.target = "_blank";
    link1.textContent = title;
    container.appendChild(link1);

    let break1 = document.createElement("br");
    container.appendChild(break1);

    let link2 = document.createElement("a");
    link2.classList.add("result-url");
    link2.href = link;
    link2.target = "_blank";
    link2.textContent = link;
    container.appendChild(link2);

    let break2 = document.createElement("br");
    container.appendChild(break2);

    let para = document.createElement("p");
    para.classList.add("link-description");
    para.textContent = description;
    container.appendChild(para);

    searchResult.appendChild(container);
}


function displayElement(searchResult) {
    spinner.classList.add("d-none");

    for (let result of searchResult) {
        addResult(result);
    }
}


function createAndAppend(event) {
    if (event.key === "Enter") {
        spinner.classList.remove("d-none");
        searchResult.textContent = "";

        let searchInputEl = searchInput.value;
        let url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchInputEl}&format=json&origin=*`;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let searchResults = jsonData.query.search.map(item =>({
                    link: `https://en.wikipedia.org/wiki/${item.title}`,
                    title : item.title,
                    description : item.snippet  
                }));
            });
    }
}

searchInput.addEventListener("keydown", createAndAppend);