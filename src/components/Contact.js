import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <div>
            <div className="contact-container">
                <div id="contact">
                    <h1>Contact</h1>
                    <p>Thank you for taking the time to go through my portfolio. If you like anything that you saw tell me about it.
                        I hope my work speaks for itself to prove that I can put in the hard work and adapt to any challenge and technology presented to me.
                        Please feel free to reach out to me at <a href="mailto: thismustbeemerson@gmail.com">thismustbeemerson@gmail.com</a> or at any of the links below.
                    </p>

                    
                    <div className="contact-icons">
                        <SocialIcon url="https://github.com/E-Albert" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                        <SocialIcon url="https://www.linkedin.com/in/emerson-albert-402922224" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                        <SocialIcon url="https://www.discordapp.com/users/ThisMightBeEmerson#7415" bgColor="rgba(255, 255, 255, 0.883)"></SocialIcon>
                    </div>
                </div>
            </div>    
        </div>
    )
}

