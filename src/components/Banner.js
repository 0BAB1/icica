import React from 'react';
import {useEffect, useState} from 'react';

function Banner() {
    const [mouseCoordinates, setMouseCoordinates] = useState("0px, 0px");

    const mouseMoveHandler = (event) => {
        setMouseCoordinates(`${event.clientX/100 -10}px ${event.clientY/100 -10}px`);
    }
  		
  	useEffect(()=>{
    	window.addEventListener('mousemove', mouseMoveHandler);
    	return(()=>{
      		window.removeEventListener('mousemove', mouseMoveHandler);
    	})
  	}, [])  

    return (
        <div className='Banner' style={{"background-position" : mouseCoordinates}}>
            <div className='content'>
                <h1>👉 Salut j'te bloque.</h1>
                <h2>Faire son propre même en utilisant le fameux template "Tu bz ?" et ce a la vitesse de la lumère grâce a notre solution révolutionnaire.</h2>
            </div>
        </div>
    );
}

export default Banner;