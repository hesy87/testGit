import { useState } from "react";
import styles from "./body.module.scss";

const Body = () => {
  const [checkBackgound, setCheckBackground] = useState(false);
  const ChangeColorHandler = () => {
    checkBackgound === false
      ? (document.getElementById("body").style.background = "gold")
      : (document.getElementById("body").style.background = "white");
    setCheckBackground(!checkBackgound);
    document.getElementById('text').innerHTML= "Clicked"
  };
  return (
    <div id="body" className={styles.body}>
      <h1 id="text">Click the Button Bellow</h1>
      <button
        onClick={() => {
          ChangeColorHandler();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Body;
