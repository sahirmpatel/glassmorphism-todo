import { React, useEffect, useState } from "react";
import axios from "axios";
export const Quotes = () => {
  const [quote, setQuote] = useState("");
  const getquote = () => {
    axios
      .get("https://api.github.com/zen")
      .then(function (response) {
        console.log("fetched new quote", response.data);

        setQuote(`"${response.data}"`);
      })
      .catch(function (error) {
        console.log(error);
        setQuote("");
      });
  };

  useEffect(() => {
    getquote();
    //   return () => {
    //       cleanup
    //   }
  }, []);

  return (
    <div className="quote-div">
      <p className="quote-p">{quote}</p>
    </div>
  );
};
