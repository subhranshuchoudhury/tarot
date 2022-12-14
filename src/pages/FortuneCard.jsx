import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './css/fortune.modules.css'
import Card from '../Cards/Cards';

const FortuneCard = (props) => {

    // javascript

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
    // const sCard = shuffle(Card);
    const [chooseCard, setChooseCard] = useState([]);
    const [counter, setCounter] = useState(0);
    const [shuffledCard, setShuffledCard] = useState(shuffle(Card));
    const addMoreItem = (e) => {
        const ID = parseInt(e.target.id);
        if (counter === 7) {
            return;
        } else {
            setCounter(counter + 1);
        }
        const shuffleData = shuffledCard.filter(x => !(x.cardIndex === (ID)));
        // console.log(shuffleData);
        setShuffledCard(shuffleData);
        const data = Card.filter(x => x.cardIndex === (ID));
        setChooseCard(state => {
            return [...state, data]
        })
        const audioElement = document.getElementById("audioPlayer2");
        audioElement.currentTime = 0;
        audioElement.play();


    }

    // this function will send the chosen tarot data to the result page.
    const sendData = () => {
        props.receiveData(chooseCard);
        const audioElement = document.getElementById("audioPlayer3");
        audioElement.currentTime = 0;
        audioElement.play();
    }

    return (
        <div>
            {
                counter === 7 ? null :
                    <h3>Choose 7 fortune cards!<br></br>Close your eyes and tap on the card.</h3>
            }
            <blockquote>
                “Love surrounds me.
                Faith supports me.
                Wisdom guides me.”
            </blockquote>
            {
                <h6>Chosen {counter} out of 7 cards, Cards left {shuffledCard.length}</h6>
            }
            {
                counter === 7 ? null :
                    shuffledCard.map((card, index) => {
                        return <div key={index} className='cardHolder'><img src="/tarot/Assets/Other/cards_back.jpg" alt="cards_back" className='fortuneCards' onClick={addMoreItem} id={card.cardIndex}>
                        </img>
                            <b className='cardIndex'>Card {parseInt(card.cardIndex)}</b>
                        </div>
                    })
            }

            <br></br>

            {
                counter === 7 ? < Link to="/tarot/result"><button type='button' className='btn btn-warning goBtn' onClick={sendData}>➡️ Reveal Fortune 🔮</button ></Link> : null
            }


        </div>
    );
}

export default FortuneCard;
