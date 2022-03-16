import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="icon-box">
                <SocialIcon url="https://github.com/E-Albert"></SocialIcon>
                <SocialIcon url="https://www.linkedin.com/in/emerson-albert-402922224"></SocialIcon>
            </div>
            <p>© Emerson Albert</p>
        </div>
    )
}

export default Footer;