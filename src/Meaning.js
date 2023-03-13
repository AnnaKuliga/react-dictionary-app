import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <section>
        <h4>{props.meaning.partOfSpeech}</h4>
        <p>
          {props.meaning.definition} <br />
          <strong>Example:</strong> <em> {props.meaning.example} </em>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </section>
    </div>
  );
}
