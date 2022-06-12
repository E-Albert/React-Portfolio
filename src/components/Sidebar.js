import React from "react";
import Photo from "../assets/img/circularheadshot.png";
import { SocialIcon } from "react-social-icons";

const Sidebar = () => {

    return (
        <>
            <div className="sidebar">
                <img src={Photo} alt="Emerson Albert"/>
                <button>About</button>
                <button>Projects</button>
                <button>Contact</button>
                <div id="icons">
                    <SocialIcon url="https://github.com/E-Albert" bgColor="green"></SocialIcon>
                    <SocialIcon url="https://www.linkedin.com/in/emerson-albert-402922224"></SocialIcon>
                    <SocialIcon url="https://www.discordapp.com/users/ThisMightBeEmerson#7415"></SocialIcon>
                </div>
            </div>
        
        </>
    )
}

export default Sidebar;