import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";

import Card from '../Cards/Cards';

const FortuneCard = (props) => {

    // javascript

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    const [chooseCard, setChooseCard] = useState([]);
    const [shuffledCard, setShuffledCard] = useState(shuffle(Card));
    const addMoreItem = (e) => {
        setShuffledCard(shuffledCard.filter(x => !x.cardIndex.includes(e.target.id)));
        const data = Card.filter(x => x.cardIndex.includes(e.target.id));
        setChooseCard(state => {
            return [...state, data]
        })

    }

    // this function will send the chosen tarot data to the result page.
    const sendData = () => {
        props.receiveData(chooseCard);
    }



    return (
        <div>
            <h3>Fortune</h3>
            {
                shuffledCard.map((card, index) => {
                    return <button onClick={addMoreItem} id={card.cardIndex} key={index}>{card.cardName}</button>
                })
            }
            {
                chooseCard.map((card, index) => {
                    // console.log(card[0].cardName);
                    return <p key={index}>{card[0].meaning}</p>
                })
            }
            <button onClick={sendData}>
                <Link to="tarot/result">Result</Link>
            </button>
        </div>
    );
}

export default FortuneCard;
