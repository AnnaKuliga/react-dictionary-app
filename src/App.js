import "./App.css";
import Dictionary from "./Dictionary";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <header className="App-header">
          <h2>What word do you want to look up?</h2>
        </header>
        <Dictionary defaultKeyword="hello" />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
