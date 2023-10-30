import React, { useState } from 'react';

function QandA({ question, answer }) {
    const [className, setClassName] = useState("closed");

    const toggleOpen = () => {
        if(className === "closed") setClassName("open");
        if(className === "open") setClassName("closed");
    };
    return (
        <div className='QandA'>
            <button className='question button' onClick={toggleOpen}>
                {question}
                <img src='Qarrow.svg' alt='Actual memes'/>
            </button>
            <div className={"answer-wrapper " + className}>
                <div>{answer}</div>
            </div>
        </div>
    );
}

export default QandA;
