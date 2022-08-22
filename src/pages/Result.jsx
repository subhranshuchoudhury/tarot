import React from 'react';
import styles from './css/result.modules.css';
const Result = (props) => {
    return (
        <div>
            <p>Outcome</p>
            {
                props.chosenData.map((d, index) => {
                    return <div key={index} className='cardContainer'><div className='imgHolder'>
                        <img key={index} src={`/${d[0].cardImage}`} alt="card_image"></img>

                    </div>
                        <div className='aboutCard'>
                            <h2>{d[0].cardName}</h2>
                            <p>[<b>{d[0].shortMeaning}</b>]<br></br>{d[0].meaning}</p>
                        </div></div>
                })
            }
        </div>
    );
}

export default Result;
