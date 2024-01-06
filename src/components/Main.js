import React from "react";
import Card from "./Card"
import Box from "./Box"
import { cards } from "../data"
import { boxes } from "../data"
import "../css/main.css"

export default function Main() {

    const card_components = cards.map(item => <Card id={item.id} item={item}/>)
    
    const [squares, setSquares] = React.useState(boxes)

    const toggle = (square_id) => {
        setSquares(prevSquares => prevSquares.map(square => {
            // ternary
            return square.id === square_id ? {...square, on: !square.on}: square
        }))
    }
    
    const box_components = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on}
            toggle={()=>toggle(square.id)}
        />
    ))

    return (
        <>
            <div className="main">
                {card_components}
            </div>
            <div style={{
                marginTop: "30px"
            }}>
                {box_components}
            </div>
        </>
    )
}