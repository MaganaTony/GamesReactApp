import React, { useEffect, useRef, useState } from "react";
import StarRate from "../starComp/starRate";
import StarPreview from "../starComp/StarPreview";
import { motion } from "framer-motion";


export default function GameItem(props) {
    const { id, name, description, image, rating } = props.data;
    const { remove, update } = props;
    const allData = [];
    allData.push(props.data);
    allData.map(element => {
        console.log(element.id);
        if (element.id == 0) {
            console.log(element);
        } else if (element.id == 1) {
            console.log(element);
        }
    })


    return (

        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                {
                    allData.map(element => {
                        console.log(element.id);
                        return (
                            <>
                                <div className={element.id == 0 ? "carousel-item active" : "d-none"}>
                                    <img src={element.image} alt={element.name} className="d-block w-100" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>{element.name}</h2>
                                        <h4>Rating: <StarPreview id={id}/></h4> 
                                        <p>{element.description}</p>
                                        <div className="col-1 d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                                            <button className="btn btn-danger p-1" onClick={() => { remove(id) }}>X</button>
                                            <button className="btn btn-success p-1" onClick={() => { update(id) }}>Editar</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={element.id >= 1 ? "carousel-item active" : "d-none"}>
                                    <img src={element.image} alt={element.name} className="d-block w-100" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h2>{element.name}</h2>
                                        <h4>Rating: <StarPreview id={id}/></h4> 
                                        <p>{element.description}</p>
                                        <div className="col-1 d-flex flex-row justify-content-between" style={{ width: "100%" }}>
                                            <button className="btn btn-danger p-1" onClick={() => { remove(id) }}>X</button>
                                            <button className="btn btn-success p-1" onClick={() => { update(id) }}>Editar</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    );
}