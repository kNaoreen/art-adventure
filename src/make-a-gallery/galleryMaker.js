import React from "react";
import "../App.css";

const GalleryMaker = (props) => {
    return (
        <div className={"App-header"}>
            <h1>
                make a gallery
            </h1>
            <p> This is a work in progress </p>
            <button onClick={() => console.log("I was clicked fr")}>Test</button>
        </div>
    );
};

export default GalleryMaker;