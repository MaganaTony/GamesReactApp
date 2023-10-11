import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as gameActions from "../../store/actions/gameActions";
import CreateGame from "./CreateGame";
import GameItem from "./GameItem";
import GameCarousel from "./GameCarousel";



export default function GameBrowser() {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.gameReducer.games);

    const navigate = useNavigate();

    function removeGame(id) {
        dispatch(gameActions.removeGameAction(id));
    }

    function updateGame(id) {
        navigate(`/gamelist/edit/${id}`);
    }   

    return(
        <div className="GameBrowser">
            <div className="text-center pt-3">
                <h1 className="text-light">Game Browser App</h1>
                <CreateGame/>
            </div> 
            <div className="Game Item DIV d-flex">
            {
                games.map((game, index) => {
                    return (
                    <GameItem key={game.id} data={game} remove={removeGame} update={updateGame} />
                    )
                })
            }
            </div>
        </div>
    );
}