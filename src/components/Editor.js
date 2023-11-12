import React, { useState } from 'react';

function Editor() {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value.slice(0, 5));
    };

    const downloadImage = async (e) => {
        e.preventDefault();
        console.log("test")
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
      
        const img = new Image();
        img.src = "modifiable.png";
      
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
        
            ctx.drawImage(img, 0, 0);
        
            ctx.font = '34px Arial';
            ctx.fillStyle = 'white';
            ctx.fillText(text + " ?", 187, 284);
            ctx.fillText(text, 230, 984);
        
            const link = document.createElement('a');
            link.download = 'custom-image.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
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
                <button className='form-button' onClick={downloadImage}>Ok</button>
            </form>
            <div className='Image'>
                <p className='text1'>{text} ?</p>
                <p className='text2'>{text}</p>
            </div>
        </div>
    );
}

export default Editor;
