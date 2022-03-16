import React from "react";

const Projects = () => {
    return (
        <div>
            <div  id='project-section' className="projects-container">
                <div className="first-column">
                    <p>Projects</p>
                </div>
                <div className="second-column">
                    <p><a href="https://e-albert.github.io/ultimate-password-generator/">Password Generator</a></p>
                    <p><a href="https://github.com/E-Albert/ultimate-password-generator">View on Github</a></p>
                    <p>Generate a strong password with criteria picked by you!</p>

                    <p class="mt-0 mb-1"><a href="https://javier0607.github.io/groupProject/">Whether Or Not</a></p>
                    <p><a href="https://github.com/javier0607/groupProject">View on Github</a></p>
                    <p>Come out how where to eat and what to do around you!</p>

                    <p class="mt-0 mb-1"><a href="https://e-albert.github.io/the-weather-dashboard/">Weather Dashboard</a></p>
                    <p><a href="https://github.com/E-Albert/the-weather-dashboard">View on Github</a></p>
                    <p>Find out the weather anywhere at anytime!</p>

                </div>
            </div>
        </div>
    )
}

export default Projects;