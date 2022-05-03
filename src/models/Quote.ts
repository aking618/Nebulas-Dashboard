export interface Quote {
  author: string;
  quote: string;
}

export const QuoteConverter = {
  toQuote(json: any): Quote {
    return {
      author: json.author,
      quote: json.en,
    };
  },
};
