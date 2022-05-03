import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Quote, QuoteConverter } from "../../models/Quote";

const ProgrammingQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const quote = await fetch(
        "https://programming-quotes-api.herokuapp.com/Quotes/random"
      );
      const quoteJson = await quote.json();
      setQuote(QuoteConverter.toQuote(quoteJson));
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Typography
      variant="h5"
      align="center"
      style={{
        fontFamily: "JetBrains Mono",
        fontSize: "1rem",
        margin: "1rem",
      }}
    >
      {loading ? "Loading..." : `${quote?.author} - ${quote?.quote}`}
    </Typography>
  );
};

export default ProgrammingQuote;
