import React from 'react';

export default function Portfolio({ projects }) {
    return (
        <div className='projects' id='projects'>
        <ul className=''>
          {projects.map((project) => (
            <li key={project.id} className='card'>
              <a href={project.link}><img src={project.image}></img></a>
                <h3>{`${project.title}`}</h3>
                <p>{`${project.description}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}