import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () => {
    return (
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
    );
};

export default Netflix;