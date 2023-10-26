import React, { useState } from 'react';

function Editor() {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value.slice(0, 10));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the text, like send it to a server or update the image
    };

    return (
        <div className='Editor'>
            <form onSubmit={handleSubmit}>
                <label>
                    Text:
                    <input type='text' value={text} onChange={handleTextChange} maxLength={10} />
                </label>
                <button type='submit'>Submit</button>
            </form>
            <div className='Image'>
                {text}
            </div>
        </div>
    );
}

export default Editor;
