import React from 'react';

function Row(props) {
    return (
        <><div className="row">
            <div className="profilePic">
                <img src = "" alt={`${props.instagramId}`}></img>
            </div>
            <div className="instagramId">{props.instagramId}</div>
            <div className="fullName">{props.fullName}</div>
        </div>
        </>
    );
}

export default Row;

