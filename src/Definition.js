import React from "react";
import Synonym from "./Synonym";
import "./Definition.css";

export default function Definition(props) {
  return (
    <div className="Definition">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span className="meaning">
              <span className="definition">{definition.definition}</span>
              <em className="example"> {definition.example}</em>

              <Synonym synonym={definition.synonyms} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
