import React from "react";
import Photo from "../assets/img/circularheadshot.png";

const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <img src={Photo} alt="Emerson Albert"/>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
            </div>
        
        </>
    )
}

export default Sidebar;