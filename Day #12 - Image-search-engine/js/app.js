const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = '';
let page = 1;
const apiKey = 'EjlwioD45E870BrKstgoOvMdSTsA2rPZEoyiHVeSbP4';

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${apiKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  showMoreBtn.style.display = 'block'
}

function search() {
  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    searchImages();
  });
}
search();

searchBox.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    search();
  }
});

showMoreBtn.addEventListener('click', () => {
  page++;
  searchImages();
});