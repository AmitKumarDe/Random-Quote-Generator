import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";




function App() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    let data = async () => {};
    data();
  }, []);

  let fetchData = async () => {
    let res = await axios.get("http://api.quotable.io/random");
    console.log(res);
    setQuote(res.data);
  };

  return (
    <div className="app">
        <div className="card">
          <h2 className="heading">{quote.author}</h2>
          <h3>"{quote.content}"</h3><br />
          <button className="button" onClick={fetchData}>
            <span>NEW QUOTE</span>
          </button>
        </div>
      </div>
  );
}

export default App;
