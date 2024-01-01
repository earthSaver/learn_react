import React from "react";
import Card from "./Card"
import cards from "../data/card"
import "../css/main.css"

export default function Main() {
    
    const content = cards.map(item => <Card item={item}/>)

    return (
        <div className="main">
            {content}
        </div>
    )
}