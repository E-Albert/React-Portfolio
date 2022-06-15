import React from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "./MyProjects";


export default function Projects() {

    return (
        <div id="projectField">

            <h2>This is where my projects are going to be displayed</h2>
            <div>
                {myProjects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>



        </div>
    )
}


