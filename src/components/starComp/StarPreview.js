import React, { useEffect, useState } from "react";
import Star from "./Star";
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "../../store/actions/gameActions";

function StarPreview(props) {
    const dispatch = useDispatch();
    const [activeGame, setActiveGame] = useState({});
    const games = useSelector((state) => state.gameReducer.games);

    useEffect(() => {
        const newGame = games.find((game) => {
            return game.id === Number(props.id);
        });

        setActiveGame(newGame);
        console.log(newGame);
    }, [props.id, games]);


    return (
        <span>
            {activeGame.rating  && [1, 2, 3, 4, 5].map((value) => (
                <Star
                    key={value}
                    filled={value <= activeGame.rating}
                />
            ))}
        </span>
    );

}
export default StarPreview;