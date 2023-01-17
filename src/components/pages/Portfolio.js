import React from 'react';

export default function Portfolio({ projects }) {
    return (
        <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <a href={project.link}><img src={project.image}></img></a>
                <h3>{`${project.title}`}</h3>
                <p>{`${project.description}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
}