import { useState } from "react";
import techniques from "./Data/technique";
import "./CSS/Technique.css";

function Technique() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="technique">
      <div className="buttons">
        {techniques.map((technique, index) => (
          <button onClick={contentChange} value={index} key={index}>
            {technique.tab}
          </button>
        ))}
      </div>

      <div className="content">
        {techniques[index].content}
      </div>
    </div>
  );
}
export default Technique;