import { useState } from "react";
import techniques from "./Data/technique";
import "../App.css";

function Technique() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(parseInt(event.currentTarget.dataset.value));
  };
  return (
    <div id="technique">
      <div className="buttons"></div>
        {techniques.map((technique, idx) => (
          <button onClick={contentChange} 
            data-value={idx}
            key={idx} 
            className="tab-link"
          >
            {technique.tab}
          </button>
        ))}
        <br/><br/>
        {techniques[index].content}
      </div>

  );
}

export default Technique;