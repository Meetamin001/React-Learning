import React from "react";

const Images = (props) => {
    return (<img
        src={props.imgscr_to_images}
        alt="myPic"
        className="card_img"
    />);
};

export default Images;