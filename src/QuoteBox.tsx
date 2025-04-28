import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

export function QuoteBox() {
  const [key, setKey] = useState(0);
  const quote = useQuery(api.quotes.getRandomQuote, { key });

  if (!quote) {
    return (
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div id="quote-box" className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="mb-6">
        <p id="text" className="text-2xl font-serif italic mb-4">
          "{quote.text}"
        </p>
        <p id="author" className="text-right text-lg text-gray-600">
          - {quote.author}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <a
          id="tweet-quote"
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
        >
          Tweet Quote
        </a>
        <button
          id="new-quote"
          onClick={() => setKey(k => k + 1)}
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
