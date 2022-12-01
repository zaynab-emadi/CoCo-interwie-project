import React from 'react';
import "../styles/loader.css";

function Loader() {
    return (
      <>
        <div className="loaderContainer">
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </>
    );
}

export default Loader;