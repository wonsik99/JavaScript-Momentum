const quotes = [
  {
    quote: "If we did all the things we are capable of, we would literally astound ourselves.",
    author: "Thomas Edison",
  },
  {
    quote: "Courage is like a muscle. We strengthen it by use.",
    author: "Ruth Gordon",
  },
  {
    quote: "Life is a series of building, testing, changing and iterating.",
    author: "Lauren Mosenthal",
  },
  {
    quote: "Perfection is not attainable, but if we chase perfection, we can catch excellence.",
    author: "Vince Lombardi",
  },
  {
    quote: "Often when you think you're at the end of something, you're at the beginning of something else.",
    author: "Fred Rogers",
  },
  {
    quote: "There are no quick fixes. But, by taking action just a little bit every day, you will build up a powerful reservoir of confidence, self-esteem, and discipline.",
    author: "Scott Allan",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote: "Happiness is not something ready-made. It comes from your own actions.",
    author: "Dalai Lama",
  },
  {
    quote: "For every minute you are angry you lose sixty seconds of happiness.",
    author: "Ralph Waldo Emerson",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;



