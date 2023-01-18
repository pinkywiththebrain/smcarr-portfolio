import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';

export default function Contact() {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'firstName') {
      setFirstName(inputValue);
    } else if (inputType === 'lastName') {
      setLastName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${firstName}, your contact info has been submitted.`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
  };

 return (
   <div className='contact-form'>
     <h1>
       Hello {firstName} {lastName}
     </h1>
     <form className="form">
       <input
         value={firstName}
         name="firstName"
         onChange={handleInputChange}
         type="text"
         placeholder="First Name"
       />
       <input
         value={lastName}
         name="lastName"
         onChange={handleInputChange}
         type="text"
         placeholder="Last Name"
       />
       <input
         value={email}
         name="email"
         onChange={handleInputChange}
         type="email"
         placeholder="Email"
       />
       <input
         value={message}
         name="message"
         onChange={handleInputChange}
         type="text"
         placeholder="Please leave a short message..."
       />
       <button type="button" onClick={handleFormSubmit}>
         Submit
       </button>
     </form>
   </div>
 );
}