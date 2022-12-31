import { useContext, useRef, useState } from "react";
import userContext from "./body";

const Navbar = (props) => {
  const catchData = useRef();
  const [data, setData] = useState();
  const InfoHandler = (event) => {
    event.preventDefault();
    setData(catchData.current.value);
    catchData.current.value = null;
  };
  const ctx = useContext(userContext);
  ctx.setHeader(data);
  return (
    <>
      {props.items.map((item, index) => (
        <div key={index} className=" m-2">
          {item}
        </div>
      ))}
      <form onSubmit={InfoHandler}>
        <input ref={catchData} type="text" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Navbar;
