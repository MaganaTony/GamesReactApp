import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRate() {

    const [rating, setRating] = useState(null);
    const [rateColor, setRateColor] = useState(null);

    const starArray = [...Array(5)]

    function starValue(){
        {[...starArray].map((star, index) => {
            const currentRating = index + 1;
            return (
                <>
                    <label>
                        <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} />
                        <FaStar color={currentRating <= (rateColor || rating) ? "yellow" : "grey"} />
                    </label>
                </>
            )
        })}
    }

    useEffect(() =>{
        const newRating = starValue()
    })

    return (

        <>

            {[...starArray].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <>
                        <label>
                            <input type="radio" name="rating" value={currentRating} onClick={() => setRating(currentRating)} />
                            <FaStar color={currentRating <= (rateColor || rating) ? "yellow" : "grey"} />
                        </label>
                    </>
                )
            })}

        </>
    )
}