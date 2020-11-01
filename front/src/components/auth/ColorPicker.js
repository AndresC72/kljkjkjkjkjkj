import React, {useEffect, useState} from 'react';

import	'./App.css';
import   './switcher.scss';

export default function ColorPicker () {
    
    //state
    const [ colorTheme, setColorTheme] = useState('theme-white');
    
    //efect
    useEffect(()=>{
        // check for selected theme // Localstorage value
        const currentThemeColor = localStorage.getItem('theme-color');
        // if found set selected theme value in state    
        if (currentThemeColor) { 
            setColorTheme(currentThemeColor);
        }
    }, []); 

    //set theme
    const handleClick = (theme) => {
        setColorTheme(theme);
        localStorage.setItem('theme-color', theme)
    }

    return (
        <div className={`App ${colorTheme}`}>
            <div className='theme-options'>
                <div id='theme-white' 
                    onClick={() => handleClick('theme-white')}
                    className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
                />
                <div id='theme-blue' 
                    onClick={() => handleClick('theme-blue')}
                    className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}
                />
                <div id='theme-orange' 
                    onClick={() => handleClick('theme-orange')}
                    className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
                />
                <div id='theme-purple' 
                    onClick={() => handleClick('theme-purple')}
                    className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
                />
                <div id='theme-green' 
                    onClick={() => handleClick('theme-green')}
                    className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
                />
                <div id='theme-black' 
                    onClick={() => handleClick('theme-black')}
                    className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
                />
            </div>
            <div className='content-box'>
                <h3>Multiple Themes Switcher / React</h3>
                <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officcis amet
                    Vitae, adipisici enim quis eligendi eius cupiditate est iste
                    odio
                    tempora? Unde cumque laboriosam itaque consequatur, modi rem 
                    quo 
                    magnam.
                </p>
                <p>-----------------</p>
            </div>
        </div>
    )
}


