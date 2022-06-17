import React from 'react';


export default function ProjectCard({project}) {
    
    return (
        <div id='projectCard' style={{backgroundImage: `url(${project.img})`}}>
            <h2>{project.title}</h2>
            <p>{project.website}</p>
            <p>{project.githubLink}</p>
            

          
        </div>
    )
}