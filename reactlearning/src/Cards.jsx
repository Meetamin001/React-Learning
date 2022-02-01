import React from "react";

//you can give custom attributes name and its value with use of props.

function Card(props){
    return (
        <>
        <div className="cards">
            <div className="card">
                <img 
                    src={props.imgscr}
                    alt="myPic" 
                    className="card_img"
                />
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