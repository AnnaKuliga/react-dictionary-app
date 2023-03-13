import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    //console.log(response.data);
    //console.log(response.data.meanings[0].definition); to show only the definition of the first meaning
    setResults(response.data);
  }
  function handleImageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }
  function search() {
    //documentation https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `5fb4oa610201e8b3c770fffbaee96fft`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    //documentation https://www.shecodes.io/learn/apis/images
    let imageApi = `5fb4oa610201e8b3c770fffbaee96fft`;
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApi}`;

    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="formSection">
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              placeholder="Type a word"
            />
          </form>
          <div className="hint">
            Suggested words: sunset, dry, sophisticated, vicious...
          </div>
        </div>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
