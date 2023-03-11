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
    console.log(response.data);
    console.log(response.data.meanings.definition);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

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
