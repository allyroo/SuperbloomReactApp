import React, { Component } from "react";

class Quote extends React.Component {
  //creating constructor function
  constructor(props) {
    super(props);
    //define the state of this application (THIS IS WHERE DATA IS BEING STORED so it can be reused)
    this.state = {
      items: [], // <- an array of the data we're fetching from the API
      isLoaded: false,
    };
  }

  componentDidMount() {
    //updates the render method

    fetch("https://zenquotes.io/api/random")
      .then((res) => res.json()) //get result from API and convert it to JSON format
      .then((json) => {
        //taking JSON data
        this.setState({
          isLoaded: true, //data has been loaded
          items: json,
        });
      });
  }
  //Render produces output of the application
  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="Quote">Yessa blessa</div>;
    }

    return <div className="Quote"></div>;
  }
}
export default Quote;

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

/////

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

// Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a>
