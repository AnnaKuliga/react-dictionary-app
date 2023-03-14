import "./App.css";
import Dictionary from "./Dictionary";
import Navbar from "./Navbar";
import ContactForm from "./ContactForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Dictionary defaultKeyword="hello" />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
