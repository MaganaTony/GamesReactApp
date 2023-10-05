import * as gameActions from '../actions/gameActions';
import StarRate from '../../components/starComp/starRate';
import React from 'react';

const initialState = {
    games: [
        {
            id: 0,
            name: "Halo 3",
            description: "Halo 3 is a 2007 first-person shooter game developed by Bungie for the Xbox 360 console. The third installment in the Halo franchise, the game concludes the story arc begun in 2001's Halo: Combat Evolved and continued in 2004's Halo 2.",
            image: "https://imgs.search.brave.com/AYQWjhbdnMiDsejCVtTwSQnbx_2atsrCfdkdnTGmcXU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFsalpCREJwREwu/anBn",
            rating: 5,
        },
        {
            id: 1,
            name: "Resident Evil 4",
            description: "Resident Evil 4[a] is a third-person shooter game developed by Capcom Production Studio 4[a] and published by Capcom. The sixth major installment in the Resident Evil series, it was originally released for the GameCube in 2005.",
            image: "https://imgs.search.brave.com/qa7IjUUE-A-HrLyhisQMleenYXIWPyLmo5RL-J6SEzA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzkzLzRi/L2M4LzkzNGJjOGQ5/NWE5NWMyZWVhYTE5/NzQ4ZDk4MDE0Nzdl/LnBuZw",
            rating: 4,
        },
        {
            id: 2,
            name: "Call of Duty: Modern Warfare 2",
            description: "Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare, continuing the storyline.",
            image: "https://imgs.search.brave.com/4mDahyoTu8cJn382i26V8w7E_yJCa8Hg8BIcKkbpycU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9ieWdhbWVzLmNv/bS9jb3ZlcnMvNjE5/ODgzOS1jYWxsLW9m/LWR1dHktbW9kZXJu/LXdhcmZhcmUtMi13/aW5kb3dzLWZyb250/LWNvdmVyLmpwZw",
            rating: 5,
        }
    ]
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case gameActions.ADD_GAME:
            return {
                ...state,
                games: [...state.games, action.payload]
            };
        case gameActions.REMOVE_GAME:
            return {
                ...state,
                games: state.games.filter(game => game.id !== Number(action.payload.id))
            };
        case gameActions.UPDATE_GAME:
            return {
                ...state,
                games: state.games.map(game => game.id === Number(action.payload.id) ?  {...game, id: action.payload.id,name: action.payload.name, description: action.payload.description, image: action.payload.image} : game)
            };
        case gameActions.UPDATE_RATING:
            // Replace rating value of game with id === action.payload.id
            return {
                ...state,
                games: state.games.map(game => game.id === Number(action.payload.id) ? {...game, rating: action.payload.rating} : game)
            };
        default:
            return state;        
    }
}

export default gameReducer;
