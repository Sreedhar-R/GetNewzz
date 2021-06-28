import React,{useState} from 'react';
import "../styles/App.css";

const Card = ({item, key,lang}) => {

    const [like,setLike] = useState(0);
    const [hide,setHide] = useState(false);

    const getLike = () => {
        setLike(like + 1);
    }

    const hideTheCard = (event) => {
        console.log(event.target.parentElement.parentElement.parentElement);
        event.target.parentElement.parentElement.parentElement.classList = "hideData"
    }

    const event = new Date(Date(item.publishedAt));
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = event.toLocaleDateString('en-US', options);
    return (
        <>
        {
        !hide
        ?
        (
        <div className="card card-individual d-flex justify-content-around" style={{width: "18rem"}}>
            <h4 className="card-title">{item.title}</h4>
            <p className="card-title">{item.source.name}</p>
            <img src={item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <small className="card-title">{date}</small>
                <div class="mb-2">
                    <button id={lang + key + 'l'} type="button" class="btn btn-primary me-2" onClick={getLike}>Like : {like}</button>
                    <button id={lang + key + 'd'} type="button" class="btn btn-primary" onClick={hideTheCard}>Hide</button>
                </div>
                <a  className="btn btn-primary" href={item.url} target="_blank">Link to article</a>
            </div>
        </div>
        )
        :   
        ("")
        }
            
        </>

    )
}

export default Card;
