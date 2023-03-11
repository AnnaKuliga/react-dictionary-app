import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    //console.log(response.data); to show the data
    //console.log(response.data.meanings[0].definition); to show only the definition of the first meaning
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();

    //documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `5fb4oa610201e8b3c770fffbaee96fft`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
