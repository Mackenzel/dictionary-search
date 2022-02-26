import React from "react";
import Definition from "./Definition";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Definition meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}