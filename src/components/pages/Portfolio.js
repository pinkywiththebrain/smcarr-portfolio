import React from 'react';

export default function Portfolio({ projects }) {
    return (
        <div>
        <ul className='projects'>
          {projects.map((project) => (
            <li key={project.id} className='card'>
              <img src={project.image} alt=''></img>
                <h3>{`${project.title}`}</h3>
                <p><a href={`${project.link}`}>Site Link</a></p>
                <p><a href={`${project.github}`}>Github</a></p>
                <p>{`${project.description}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}