import { useState } from "react";
import certificates from "./Data/certificate";
import "../App.css"

function Certificate() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(parseInt(event.currentTarget.dataset.value));
  };
  return (
    <div id="certificate">
      <div className="buttons"></div>
        {certificates.map((certificate, idx) => ( // 인덱스 변수 이름을 idx로 변경하여 중복을 피함
          <button 
            onClick={contentChange} 
            data-value={idx} 
            key={idx}
            className="tab-link"
          >
            {certificate.tab}
          </button>
        ))}
          <br/><br/>
        {certificates[index].content}
      </div>
  );
}

export default Certificate;