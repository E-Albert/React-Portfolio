import React from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';



const DisplayField = () => {

    return (
        <>
            <div className='display'>
                <About />
                <Projects />
                <Contact />
        </div>
        
        </>
    )
}

export default DisplayField;
