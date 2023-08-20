const quotes = [
    {
      quote: "The road to success and the road to failure are almost exactly the same.",
      author: "Colin R. Davis",
    },
    {
      quote: "It is better to fail in originality than to succeed in imitation.",
      author: "Herman Melville",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      quote: "All progress takes place outside the comfort zone.",
      author: "Michael John Bobak",
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Walt Disney",
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;