import React from "react";

export default function TextColorIcon(props) {
  return (
    <svg width="16px" height="15px" viewBox="0 0 16 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>text_color</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="text_color" fill="#5F6368" fillRule="nonzero">
          <path d="M8.8080349,0 L12.254691,9 L10.1551687,9 L9.43860815,6.99144635 L6.01344891,6.99144635 L5.29688841,9 L3.25469096,9 L4.66629454,5.35190515 L6.73717503,0 L8.8080349,0 Z M8.9298502,5.52177294 L7.76902217,2.23950233 L6.57236611,5.54276828 L8.9298502,5.52177294 Z" id="Shape"/>
          {!!props.color ?
            <polygon fill={props.color} points="0.00303532699 12.2538631 15.8970751 12.2538631 15.8970751 14.9028698 0.00303532699 14.9028698"/> :
            <polygon fillOpacity="0.36" points="0.00303532699 12.2538631 15.8970751 12.2538631 15.8970751 14.9028698 0.00303532699 14.9028698"/>
          }
        </g>
      </g>
    </svg>
  );
}