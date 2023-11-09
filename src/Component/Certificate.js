import { useState } from "react";
import certificates from "./Data/certificate";
import "./CSS/Certificate.css";

function Certificate() {
  const [index, setIndex] = useState(0);
  const contentChange = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div id="certificate">
      <div className="buttons">
        {certificates.map((certificate, idx) => ( // 인덱스 변수 이름을 idx로 변경하여 중복을 피함
          <button onClick={contentChange} value={idx} key={idx}>
            {certificate.tab}
          </button>
        ))}
      </div>

      <div className="content">
        {certificates[index].content}
      </div>
    </div>
  );
}

export default Certificate;