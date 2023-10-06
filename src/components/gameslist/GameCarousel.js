import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import GameItem from './GameItem';
import { useDispatch, useSelector } from 'react-redux';
import * as gameActions from "../../store/actions/gameActions";
import React from 'react';


export default function GameCarousel(props) {
    const { id, name, description, image, rating } = props.data;
    console.log(props.data);

    const responsive = {
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
      }; 

    return (
        <div className='container'>
            <h1>React multi carousel</h1>
            <Carousel responsive={responsive}>
                <div>Item1</div>
                <div>Item2</div>
                <div>Item3</div>
                <div>Item4</div>
            </Carousel>

        </div>
    )

}