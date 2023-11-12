import { useState } from "react";
import intros from "./Data/intros";
import '../App.css';

function Introduction() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
    // 'value' 대신 'data-value' 속성을 사용
    setIndex(parseInt(event.currentTarget.dataset.value));
  };

  return (
    <div id="introduction">
      <div className="buttons"></div>
      {intros.map((intro, idx) => (
        <button
          onClick={contentChange}
          // 'value' 대신 'data-value' 속성을 사용
          data-value={idx}
          key={idx}
          className="tab-link"
        >
          {intro.tab}
        </button>
      ))}
      <br /> <br />
      {intros[index].content}
    </div>
  );
}

export default Introduction;
