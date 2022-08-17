import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux';
import { loadGames } from "../actions/gamesActions";
import GameDetail from "../components/GameDetail";

//Styling and Component
import styled from "styled-components"
import {motion} from "framer-motion"
import Game from "../components/Game";

import {useLocation} from "react-router-dom"

const Home=()=>{
    //Fetch Games
    const location=useLocation()
    const pathID=location.pathname.split("/")[2];
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
    },[dispatch]);
    //get games back from state
    const{popular,newGames,upcoming}=useSelector((state)=>state.games)

    return(
        
        <GameList>
            {pathID && <GameDetail/>}
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game=>(
                    <Game name={game.name} 
                    released={game.released} 
                    image={game.background_image} 
                    id={game.id} 
                    key={game.id}
                    />
                ))}
                
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {popular.map(game=>(
                    <Game name={game.name} 
                    released={game.released} 
                    image={game.background_image} 
                    id={game.id} 
                    key={game.id}
                    />
                ))}
                
            </Games>
            <h2>New Games</h2>
            <Games>
                {newGames.map(game=>(
                    <Game name={game.name} 
                    released={game.released} 
                    image={game.background_image} 
                    id={game.id} 
                    key={game.id}
                    />
                ))}
                
            </Games>
        </GameList>
        
    )
}
const GameList=styled(motion.div)`
padding:0rem 5rem
h2{
    padding: 5rem 0rem
}
`
const Games=styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(500px,1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`

export default Home;