import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        {props.synonym.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
