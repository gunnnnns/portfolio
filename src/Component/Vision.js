import { useState } from "react";
import visions from "./Data/vision";
import "./CSS/Vision.css";

function Vision() {
  const [index] = useState(0);
  
  return (
    <div id="vision">
      <div className="content">
        {visions[index].content}
      </div>
    </div>
  );
}

export default Vision;