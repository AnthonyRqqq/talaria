const getQuote = async () => {
  const response = await fetch("http://localhost:3001/api/quote");
  const data = await response.json();
  return {
    author: data[0].a,
    quote: data[0].q,
  };
};

export { getQuote };
