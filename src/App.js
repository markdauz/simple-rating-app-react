import { Rating } from "./Rating";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Simple Rating App - React Hooks</h1>
      <Rating totalStars={5} />
    </div>
  );
}
