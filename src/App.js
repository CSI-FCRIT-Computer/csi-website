import "./styles.css";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}
