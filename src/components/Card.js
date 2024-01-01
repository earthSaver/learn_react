import React from "react";
import "../css/card.css"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-img-container">
                <img className="card-img" src={`../images/${props.item.img}`} alt={props.item.img}/>
                <div className="card-duration">{props.item.duration}</div>
                {props.item.hot && <div className="card-hot">HOT</div>}
            </div>
            <div className="card-info">
                {props.item.info ? props.item.info: "Default Info"}
            </div>
        </div>
    )
}