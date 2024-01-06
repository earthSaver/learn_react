import React from "react";
import "../css/box.css"

export default function Card(props) {
    const styles = {
        backgroundColor: props.on ? "lightblue": "transparent"
    }
    return (
        <div style={styles} className="box" onClick={props.toggle}>
        </div>
    )
}