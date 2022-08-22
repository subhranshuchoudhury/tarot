import React from 'react';
import { Link } from "react-router-dom";

import styles from './css/home.module.css';
const Home = () => {
    //tarot/Assets/Other/


    return (
        <div>
            <h1>🔮 Tarot Card Reading</h1>
            <div className="text-center">
                <img src={`/tarot/Assets/Other/A${parseInt(Math.random() * 3 + 1)}.jpg`} className={styles.imgWidth} alt="..."></img>
            </div>
            <Link to="/tarot/fortune">
                <button className="btn btn-outline-dark">Let's Fortune ➡️</button>
            </Link>
            {/* <Link to="/tarot/fortune">
                <img src={`tarot/Assets/Other/${parseInt(Math.random() * 5 + 1)}.jpg`} className="img-fluid" alt="tarot_wallpaper">
                </img>
            </Link> */}

            <blockquote>
                “Love surrounds me.
                Faith supports me.
                Wisdom guides me.”
            </blockquote>
        </div>
    );
}

export default Home;
