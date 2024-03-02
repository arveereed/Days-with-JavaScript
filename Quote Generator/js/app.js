const api_url = "https://api.quotable.io/quotes/random";
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById('tweet-btn');

async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();

  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=%22${quote.innerHTML}%22%0A%09%09%09%09%09%09%09—%20${author.innerHTML}`,
    "Tweet Window",
    "width=600, height=300"
  );
}

getQuote(api_url);

newQuoteBtn.addEventListener('click', () => {
  getQuote(api_url);
});

tweetBtn.addEventListener('click', () => {
  tweet();
});