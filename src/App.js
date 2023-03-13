import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary defaultKeyword="dictionary" />
        <footer className="App-footer">
          The website was coded by Anna and is{" "}
          <a
            href="https://github.com/AnnaKuliga/react-dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
