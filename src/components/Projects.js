import React from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "./MyProjects";


export default function Projects() {

    return (
        <div id="projectField">

            <h1 id='projectLogo'>Projects</h1>
            <div id="projectCardDisplay">
                {myProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>



        </div>
    )
}


