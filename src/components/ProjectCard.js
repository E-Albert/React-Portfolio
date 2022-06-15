import React from 'react';


export default function ProjectCard({project}) {
    
    return (
        <div id='projectCard'>
            <h2>{project.title}</h2>
            <p>{project.website}</p>
            <p>{project.githubLink}</p>
            <p>{project.img}</p>

          
        </div>
    )
}