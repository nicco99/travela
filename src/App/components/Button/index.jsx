import React from "react";

//INTERNAL IMPORT
import "../css/button.css";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div className='box'>
      <button
        className={`${'button'} ${classStyle}`}
        onClick={() => handleClick()}
      >
        {icon} {btnName}
      </button>
    </div>
  );
};

export default Button;