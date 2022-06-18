import React from 'react';


export default function ProjectCard({project}) {
    
    return (
        <div id='projectCard' style={{ backgroundImage: `url(${project.img})` }}>
            <div id='projectCardText'>
                <h2>{project.title}</h2>
                <a href={project.website}>Website</a>
                <a href={project.githubLink}>Github</a>
            </div>

          
        </div>
    )
}