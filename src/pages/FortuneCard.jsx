import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './css/fortune.modules.css'
import Card from '../Cards/Cards';

const FortuneCard = (props) => {

    // javascript

    const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);

    const [chooseCard, setChooseCard] = useState([]);
    const [counter, setCounter] = useState(0);
    const [shuffledCard, setShuffledCard] = useState(shuffle(Card));
    const addMoreItem = (e) => {
        if (counter === 7) {
            return;
        } else {
            setCounter(counter + 1);
        }
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
            {
                counter === 7 ? null :
                    <h3>Choose 7 fortune cards!</h3>
            }
            {
                <h6>Chosen {counter} out of 7 cards, Cards left {shuffledCard.length}</h6>
            }
            {
                counter === 7 ? null :
                    shuffledCard.map((card, index) => {
                        return <div className='cardHolder'><img src="/tarot/Assets/Other/cards_back.jpg" alt="cards_back" className='fortuneCards' onClick={addMoreItem} id={card.cardIndex} key={index}>
                        </img>
                            {/* <b className='cardIndex'>Card {parseInt(card.cardIndex) + 1}</b> */}
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
