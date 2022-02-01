import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";

/* =============== 1 function but different attributes==========
function Card() {
    return (
        <>
        <div className="cards">
            <div className="card">
                <img 
                    src="https://resizing.flixster.com/Xr7qz5Sc9FbC2Ed_znk1QdK-TKw=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw"
                    alt="myPic" 
                    className="card_img"
                />
                <div className="card_info">
                    <span className="card_category"> A Netflix Original Series</span>
                    <h3 className="card_title"> DARK </h3>
                    <a href="https://www.netflix.com/ca/title/80100172?source=35" target="_blank">
                        <button> Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

ReactDOM.render(
    <>
    <Card />  don't need to write 1 type of tag and its attributes everytime
    <Card />
    <Card />
    <Card />
    </>     
,document.getElementById("root")
);

*/

// =================Use of props==========

ReactDOM.render(
    <>
    <Card
        //image tag src
        imgscr ="https://resizing.flixster.com/Xr7qz5Sc9FbC2Ed_znk1QdK-TKw=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw"
        // span value (card_category)
        sname = "A Netflix Original Series"
        // h3 tags value (title of series)
        title = "DARK"
        // button link
        link = "https://www.netflix.com/ca/title/80100172?source=35"
    />
    <Card 
        imgscr = "https://www.tvguide.com/a/img/catalog/provider/1/1/1-8388055876.jpg"
        sname = "A Netflix Original Series"
        title = "OZARK"
        link = "https://www.netflix.com/ca/title/80117552?source=35"
    />
    <Card 
        imgscr = "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQxa5V6-KNSEUkmA3QJHldj8BM5J3dVHz6k16LmKITvgOeI2unk"
        sname = "A Netflix Original Series"
        title = "SUITS"
        link = "https://www.netflix.com/ca/title/70195800?source=35"
    />
    <Card 
        imgscr = "https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
        sname = "A Netflix Original Series"
        title = "BREAKING BAD"
        link = "https://www.netflix.com/ca/title/70143836?source=355"
    />
    </>     
,document.getElementById("root")
);