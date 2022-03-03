import React from "react";
import Definition from "./Definition";
import Phonetic from "./Phonetic";
import "./SearchResults.css";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <section className="shadow">
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section className="shadow" key={index}>
              <Definition meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
