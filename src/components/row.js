import React from "react";
import "../styles/row.css";
import { useNavigate } from "react-router-dom";

function Row(props) {
  const Navigate = useNavigate();
  return (
    <>
      <div className="row">
        <img
          src={`${props.profilePicUrl}`}
          alt={`${props.instagramId}`}
          className="profilePic"
        ></img>
        <div
          className="infoBox"
          onClick={() => {
            Navigate(`detail/${props.instagramId}`);
          }}
        >
          <div className="instagramId">{props.instagramId}</div>
          <div className="fullName">{props.fullName}</div>
        </div>
        <ul className="editDots">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Row;
