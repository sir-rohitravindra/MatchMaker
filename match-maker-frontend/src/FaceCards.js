import React from 'react'
import './FaceCards.css'
import { useState } from 'react';
import TinderCard from "react-tinder-card";
import {useEffect} from 'react';
import axios from './Axios.js'

function FaceCards() {

    const [people,setPeople] = useState([]);
    useEffect(() => {
        
        async function fetchData(){
            const req=await axios.get('/matchmaker/cards');
            setPeople(req.data);
        }

        fetchData();

    }, [])

    const swiped=(direction,nameToDelete)=>{
        console.log("removing: "+nameToDelete);
        //setLastDirection(direction);
    }

    const outOfFrame=(name)=>{
        console.log(name+" left the screen!");
    }

    return (
        <div className="faceCards">
            <div className="faceCard_cardContainer">
                {people.map((person) =>(
                    <TinderCard 
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe={(dir)=>swiped(dir,person.name)}
                    onCardLeftScreen={()=> outOfFrame(person.name)}
                    >
                    <div
                        style={{backgroundImage:"url("+person.url+")"}}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                    </TinderCard>
                ))}
            </div>
            
        </div>
    )
}

export default FaceCards
