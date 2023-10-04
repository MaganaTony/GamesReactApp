import React, {useRef, useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "../../store/actions/gameActions";

import { Link, useNavigate, useParams } from "react-router-dom";
import StarRate from "../../components/starRating/starRate";

export default function GameEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const games = useSelector((state) => state.gameReducer.games);

    const [activeGame, setActiveGame] = useState({});

    const gameNameInput = useRef(null);
    const gameDescriptionInput = useRef(null);
    const gameImageInput = useRef(null);
    const gameRatingInput = useRef(null);

    function finishEdit(){
        const editedGame = {
            id: Number(id),
            name: gameNameInput.current.value,
            description: gameDescriptionInput.current.value,
            image: gameImageInput.current.value,
            rating: Number(gameRatingInput.current.value)
        };

        dispatch({
            type: gameActions.UPDATE_GAME,
            payload: editedGame
        });

        navigate("/");
    }

    useEffect(() => {
        const newGame = games.find((game) => {
            return game.id === Number(id);
        });

        setActiveGame(newGame);
    }, [id]);

    return (
        <div className="Game edit">
            {
                activeGame.name ? (
                    <div className="container card">
                        <Link to={`/`}>Back to games list</Link>
                        <h4>Game #{id}</h4>
                        <div className="form-group">
                            <label htmlFor="gameName">Name</label>
                            <input ref={gameNameInput} type="text" className="form-control" id="gameName" defaultValue={activeGame.name}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameDescription">Description</label>
                            <textarea ref={gameDescriptionInput} className="form-control" id="gameDescription" defaultValue={activeGame.description}/>
                        </div>
                        <div className="form-group">
                            <StarRate id="gameRating"/>
                            <label htmlFor="gameRating">Rating</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gameImage">Image</label>
                            <input ref={gameImageInput} type="text" className="form-control" id="gameImage" defaultValue={activeGame.image}/>
                        </div>
                        <button className="btn btn-primary w-25 my-4 text-right" onClick={() => finishEdit()}>Finish Edit</button>
                    </div>
                ) : ('Loading...')
            }
        </div>
    )
}