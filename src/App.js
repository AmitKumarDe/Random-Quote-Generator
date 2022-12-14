import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    let data = async () => {
      let res = await axios.get("https://api.quotable.io/random");
      console.log(res);
      setQuote(res.data);
    };
    data();
  }, []);

  let fetchData = async () => {
    let res = await axios.get("https://api.quotable.io/random");
    console.log(res);
    setQuote(res.data);
  };

  return (
    <div className="app">
      <div className="card">
        <h2 className="heading">{quote.author}</h2>
        <h3>{quote.content}</h3>
        <br />
        <button className="button" onClick={fetchData}>
          <span>NEW QUOTE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
