import React from "react";
import "../css/box.css"

export default function Card(props) {
    const styles = {
        // use ternary to dynamically change the style
        backgroundColor: props.on ? "lightblue": "transparent"
    }
    return (
        <div style={styles} className="box" onClick={props.toggle}>
        </div>
    )
}