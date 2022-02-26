import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header contianer">
        <h1 className="search-header">Dictionary Search</h1>
      </header>
      <Dictionary />
      <footer className="search-footer">
        This project was coded by Mackenzie Yarnall and is{" "}
        <a href="https://github.com/Mackenzel/dictionary-search">
          open-source on Github
        </a>
        .
      </footer>
    </div>
  );
}
