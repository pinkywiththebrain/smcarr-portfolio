import React from 'react';

export default function About() {
  return (
    <div className='about' id='id'>
        <img src={process.env.PUBLIC_URL + '/images/image0.png'} alt='' className='profileimage'/>
      <div className='description'>
        <h1>About the Developer</h1>
        <p>
        My name is Sophie Carr and I am a junior software developer from Richmond, Virginia. I have a background in fine arts, graduating from Henrico Highschool's Center for the Arts in 2015 and attending the Pennsylvania Academy of Fine Arts for illustration shortly after. I studied software development through the University of Richmond's Full Stack Bootcamp program, earning my certificate in February 2023. I am known among my colleagues as a creative problem solver who takes great attention to detail on both the front-end and back-end of each project. Since completing my certificate, I have continued my studies independently, learning more coding languages such as C# and python. I also take great interest in UI and UX design theory, which I have been studying independently as well. In my free time I have also been dabbling in game development, and I am currently working on a small platformer using GameMaker.
        </p>
      </div>
    </div>
  );
}