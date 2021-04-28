import React from 'react'
import './FaceCards.css'
import { useState } from 'react';
import TinderCard from "react-tinder-card";

function FaceCards() {

    const [people,setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://vz.cnwimg.com/thumb-1200x/wp-content/uploads/2010/06/Elon-Musk.jpg"
        },
        {
            name: "Robert Downey Jr",
            url: "https://d23.com/app/uploads/2019/08/2019-disneylegend-rdj.jpg"
        },
        {
            name: "Leonardo Dicaprio",
            url: "https://wallpapercave.com/wp/wp1809191.jpg"
        },
    ]);

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
