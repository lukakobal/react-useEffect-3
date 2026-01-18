import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text ? `Typing: ${text}` : "React 63";
  }, [text]);

  return (
    <div className="app">
      <h1>useEffect – document.title</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Piši nekaj..."
      />
      <p>Vrednost v state-u: {text}</p>
    </div>
  );
}
