import React from 'react';
import "../styles/row.css"

function Row(props) {
    return (
        <><div className="row">
                <img src = {`${props.profilePicUrl}`} alt={`${props.instagramId}`} className="profilePic"></img>
            <div className="infoBox">
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

