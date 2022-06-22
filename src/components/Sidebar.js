import React from "react";
import Photo from "../assets/img/circularheadshot.png";
import { SocialIcon } from "react-social-icons";

const Sidebar = ({handlePageChange}) => {

    return (
        <>
            <div className="sidebar">
                <img src={Photo} alt="Emerson Albert" />
                <h1>Emerson Albert</h1>
                <button onClick={() => handlePageChange('About')}>About</button>
                <button onClick={() => handlePageChange('Projects')}>Projects</button>
                <button onClick={() => handlePageChange('Contact')}>Contact</button>
                <div id="icons">
                    <SocialIcon url="https://github.com/E-Albert" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                    <SocialIcon url="https://www.linkedin.com/in/emerson-albert-402922224" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                    <SocialIcon url="https://www.discordapp.com/users/ThisMightBeEmerson#7415" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                </div>
            </div>
        
        </>
    )
}

export default Sidebar;