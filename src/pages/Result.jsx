import React from 'react';

const Result = (props) => {
    return (
        <div>
            <p>Result Page</p>
            {
                props.chosenData.map((d, index) => {
                    return <p key={index}>{d[0].cardName}</p>
                })
            }
        </div>
    );
}

export default Result;
