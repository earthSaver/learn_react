import React from "react";
import "../css/card.css"

export default function Card(props) {
    return (
        <div className="card">
            {props.item.name}: {props.item.age}
        </div>
    )
}