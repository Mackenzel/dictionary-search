import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetics">
      {props.phonetic.text}
      <br />
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        🔊
      </a>
    </div>
  );
}
