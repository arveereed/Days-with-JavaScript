const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById("new-quote-btn");
const tweetBtn = document.getElementById('tweet-btn');

async function getQuote() {
  try {
      const response = await fetch("js/quotes.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const index = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[index];

      quote.innerHTML = randomQuote.text;
      author.innerHTML = randomQuote.author;

  } catch(error) {
    console.error("Error fetching the quote:", error);
  }


}


function tweet() {
  window.open(
    `https://twitter.com/intent/tweet?text=%22${quote.innerHTML}%22%0A%09%09%09%09%09%09%09—%20${author.innerHTML}`,
    "Tweet Window",
    "width=600, height=300"
  );
}

getQuote();

newQuoteBtn.addEventListener('click', () => {
  getQuote();
});

tweetBtn.addEventListener('click', () => {
  tweet();
});