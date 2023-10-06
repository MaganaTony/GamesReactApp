import React, { useEffect, useRef, useState } from "react";
import StarRate from "../starComp/starRate";
import StarPreview from "../starComp/StarPreview";
import { motion } from "framer-motion";


export default function GameItem(props) {
    const { id, name, description, image, rating } = props.data;
    const { remove, update } = props;
    console.log(props.data);
  

    return (
        <div className="Gameitem card m-2 py-1 px-2">
            <div className="col-2" id="item" key={image}>
                <img src={image} alt={name} style={{width: "100%", borderRadius:"10px"}} />
            </div>
            <div className="col-9">
                <h2>{name}</h2>
                <h4>Rating: <StarPreview id={id}/></h4> 
                <p>{description}</p>
            </div>
            <div className="col-1 d-flex flex-row justify-content-between" style={{width:"100%"}}>
                <button className="btn btn-danger p-1" onClick={() => {remove(id)}}>X</button>
                <button className="btn btn-success p-1" onClick={() => {update(id)}}>Editar</button>
            </div>
        </div>
    );
}