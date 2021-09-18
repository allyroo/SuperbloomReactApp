// const api_url = "https://zenquotes.io/api/quotes/";

// async function getQuote() {
//   const response = await fetch("https://zenquotes.io/api/random")
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".mQuoteAPI").innerHTML = data.q;
//       //   var data = await response.json();
//       console.log(data.q);
//     });
// }
// getQuote(api_url);

///////

// import React, { useState, useEffect } from "react";
// import "./Quote.css";
// import axios from "axios";

// const quoteAPI = () => {
//   const [quote, setQuote] = useState("");
//   const [author, setAuthor] = useState("");

//   const quoteAPI = async () => {
//     let arrayOfQuotes = [];
//     try {
//       const data = axios.get("https://api.quotable.io/random");
//       arrayOfQuote = data.data;
//     } catch (error) {
//       console.log(error);
//     }

//     try {
//       setQuote(arrayOfQuotes.content);
//       setAuther(arrayOfQuotes.author);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     quoteAPI();
//   }, []);

//   return (
//     <div className="Quote">
//       {quote}
//       {author}
//       <button onClick={quoteAPI}>Click quote</button>
//     </div>
//   );
// };

// export default quoteAPI;
