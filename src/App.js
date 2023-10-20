import "./styles.css";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/homepage/Navbar";
import Starbg from "./components/homepage/Starbg";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Starbg />
    </div>
  );
}
