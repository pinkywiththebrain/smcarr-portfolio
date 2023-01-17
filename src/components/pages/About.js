import React from 'react';
// import image from './images/image0.png';

export default function About() {
  return (
    <div className='about' id='id'>
        {/* <img src={image} alt='' /> */}
      <div className='description'>
        <h1>About the Developer</h1>
        <p>
          My name is Sophie Carr and I am a software development student from Richmond, Virginia. I have a background in fine arts, graduating from Henrico Highschool's Center for the Arts in 2015 and attending the Pennsylvania Academy of Fine Arts for illustration shortly after. I am interested in creative front end design and graphic design and would possibly like to get involved with game development as well.
        </p>
      </div>
    </div>
  );
}