import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning mt-2">
      <div className="card ">
        <div className="card-header">
          <FontAwesomeIcon icon={faBookBookmark} />
          <h4>{props.meaning.partOfSpeech}</h4>
        </div>
        <div className="card-body">
          <div className="definition">
            {props.meaning.definition} <br />
          </div>
          <div className="example"> {props.meaning.example}</div>
          <div className="synonyms">
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </div>
      </div>
    </div>
  );
}
