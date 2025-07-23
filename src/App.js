import TypingEffect from "./components/TypingEffect";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h3>Typing Effect</h3>
      <TypingEffect text="I'm a Frontend Developer." delay="150" />
    </div>
  );
}
