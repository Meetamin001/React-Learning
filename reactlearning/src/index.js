import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Card from "./Cards";
//import Sdata from "./Sdata";
import App from "./App";


/* =============== 1 function but different attributes==========
==================without props=========================
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

/* ReactDOM.render(
    <>
    <h1 className="heading_style">Top 5 Netflix series in 2020</h1>

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
); */

//========================using Array==========================
/* console.log(Sdata[0]);
console.log(Sdata[0].sname);
ReactDOM.render(
    <>
    <h1 className="heading_style">Top 5 Netflix series in 2020</h1>

    <Card
        imgscr ={Sdata[0].imgscr}
        sname = {Sdata[0].sname}
        title = {Sdata[0].title}
        link = {Sdata[0].link}
    />
    <Card 
        imgscr ={Sdata[1].imgscr}
        sname = {Sdata[1].sname}
        title = {Sdata[1].title}
        link = {Sdata[1].link}
    />
    <Card 
        imgscr ={Sdata[2].imgscr}
        sname = {Sdata[2].sname}
        title = {Sdata[2].title}
        link = {Sdata[2].link}
    />
    <Card 
        imgscr ={Sdata[3].imgscr}
        sname = {Sdata[3].sname}
        title = {Sdata[3].title}
        link = {Sdata[3].link}
    />
    <Card 
        imgscr ={Sdata[4].imgscr}
        sname = {Sdata[4].sname}
        title = {Sdata[4].title}
        link = {Sdata[4].link}
    />
    </>     
,document.getElementById("root")
); */

/* 
// =================using MAP function ================
/* function ncard(value, indexx, array(which array)) */
/* function ncard(val){
    console.log(val);
    return(
        <Card
            imgscr ={val.imgscr}
            sname = {val.sname}
            title = {val.title}
            link = {val.link}
        />
    );
}
 */
// ReactDOM.render(
//     <>
//     <h1 className="heading_style">Top 5 Netflix series in 2020</h1>
// {/* 
//     <Card
//         imgscr ={Sdata[0].imgscr}
//         sname = {Sdata[0].sname}
//         title = {Sdata[0].title}
//         link = {Sdata[0].link}
//     /> */}

//     {/* array.map(function (currentValue, index, arr), thisValue)  */}
//     {Sdata.map(ncard)}
//     </>     
// ,document.getElementById("root")
// );

/* can also replce {Sdata.map(ncard)}... this way */
/* 
{Sdata.map(function ncard(val)
                        {
                            return(
                                <Card
                                    imgscr ={val.imgscr}
                                    sname = {val.sname}
                                    title = {val.title}
                                    link = {val.link}
                                />
                            );
                        }
        )
}
*/

// =================using MAP & FAT Arrow function ================

//...normal function.....
/* 
    function myName(a,b){
        return a+b;
} 
*/
//.......fat & arrow function..
/*
    const myName = (a,b) => {
        return a+b;
    }
*/
//......another easy way.....
/*  
    const myName = (a,b) => a+b;
*/
/* 
ReactDOM.render(
    <>
        <h1 className="heading_style">Top 5 Netflix series in 2020</h1>

        {// 
            {Sdata.map(const ncard = (val) => {...} )} dont need to give function Name
        //}
        {Sdata.map((val, index) => {
            console.log(index); // it will show index of array 0,1,2,..
            return (
                <Card
                    key={val.id} // must need key(unique) in map function.
                    imgscr={val.imgscr}
                    sname={val.sname}
                    title={val.title}
                    link={val.link}
                />
            );
        }
        )
        }
    </>
    , document.getElementById("root")
);
 */

//=============   =============================

/* 
ReactDOM.render(
    <>
        <h1 className="heading_style">Top 5 Netflix series in 2020</h1>

        {Sdata.map((val, index) => {
            return (
                <Card
                    key={val.id} // must need key(unique) in map function.
                    imgscr={val.imgscr}
                    sname={val.sname}
                    title={val.title}
                    link={val.link}
                />
            );
        }
        )
        }
    </>
    , document.getElementById("root")
); 
*/

//======================Final Code============

ReactDOM.render(
    <App />
    , document.getElementById("root")
);




