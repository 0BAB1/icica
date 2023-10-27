import React, { useState } from 'react';

function Editor() {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value.slice(0, 10));
    };

    return (
        <div className='Editor'>
            <form
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
            >
                <label>
                    <input onChange={handleTextChange} type="text"/>
                </label>
                <button className='form-button'>Ok</button>
            </form>
            <div className='Image'>
                <p className='text1'>{text} ?</p>
                <p className='text2'>{text}</p>
            </div>
        </div>
    );
}

export default Editor;
