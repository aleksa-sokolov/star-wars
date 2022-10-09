import React from 'react';
import './buttonClose.style.css';

const ButtonClose = () => {
  return (
    <>
      <svg
        className="mobile-btn__close"
        width="72px"
        height="72px"
        viewBox="0 0 72 72"
        id="emoji"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="color" />
        <g id="hair" />
        <g id="skin" />
        <g id="skin-shadow" />
        <g id="line">
          <line
            x1="17.5"
            x2="54.5"
            y1="17.5"
            y2="54.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="54.5"
            x2="17.5"
            y1="17.5"
            y2="54.5"
            fill="none"
            stroke="#000000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </g>
      </svg>
    </>
  );
};

export default ButtonClose;
