import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getRandomQuote = query({
  args: {
    key: v.number(),
  },
  handler: async (ctx, args) => {
    const quotes = await ctx.db.query("quotes").collect();
    if (quotes.length === 0) {
      return {
        text: "The best way to predict the future is to create it.",
        author: "Abraham Lincoln"
      };
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  },
});

export const addQuote = mutation({
  args: {
    text: v.string(),
    author: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("quotes", {
      text: args.text,
      author: args.author,
    });
  },
});
