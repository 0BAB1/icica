import React, { useState } from 'react';

function QandA({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='QandA'>
            <button className='question button' onClick={toggleOpen}>
                {question}
                <img src='Qarrow.svg' alt='Actual memes'/>
            </button>
            {isOpen && <p>{answer}</p>}
        </div>
    );
}

export default QandA;
