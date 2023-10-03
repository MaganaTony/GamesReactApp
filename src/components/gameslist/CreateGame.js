import React, {useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "../../store/actions/gameActions";

export default function CreateGame() {
    const dispatch = useDispatch();

    const games = useSelector(state => state.gameReducer.games);
    const gameInput = useRef(null);

    function createGame() {
        const gameName = gameInput.current.value;

        const newGame = {
            id: games.length,
            name: gameName,
            description: "This is a game with no description yet", 
            image: "no image",
            rating: 0
        };

        dispatch({
            type: gameActions.ADD_GAME,
            payload: newGame
        });
    }

    return (
        <div className="container d-flex flex-row align-items-center">
            <input ref={gameInput} type="text" className="form-control" placeholder="Enter game name" />
            <button onClick={() => createGame()} className="btn btn-primary btn-sm py-1">Create Game</button>
        </div>
    )
}