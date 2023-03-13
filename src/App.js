import "./App.css";
import Dictionary from "./Dictionary";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

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
        <footer className="App-footer" id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
