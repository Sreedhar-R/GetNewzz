import React from 'react';
import Card from "./Card";
import "../styles/App.css";

const Cardlist = ({news,lang}) => {
    console.log(news);
    return (
        <div className="d-flex container flex-wrap justify-content-around">
            {
                news.map((item,i) => {
                    return <Card key={i} item={item} lang={lang}/> ;
                })
            }
        </div>
    )
}

export default Cardlist;
