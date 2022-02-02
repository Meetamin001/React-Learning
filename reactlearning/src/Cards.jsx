import React from "react";
import Images from "./Images";

//you can give custom attributes name and its value with use of props.

function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgscr_to_images={props.imgscr} /> {/* imgscr_to Images is a prop of Images comp, passing value of imgscr into another comp */}
                    <div className="card_info">
                        <span className="card_category"> {props.sname} </span>
                        <h3 className="card_title"> {props.title} </h3>
                        <a href={props.link} target="_blank">
                            <button> Watch Now </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;