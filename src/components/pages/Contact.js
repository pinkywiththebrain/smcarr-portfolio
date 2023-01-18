import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'First name') {
      setFirstName(inputValue);
    } else if (inputType === 'Last name') {
      setLastName(inputValue);
    } else if (inputType === 'Email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    };

    if (!inputValue.length){
      setErrorMessage(`${inputType} is required ! ! !`)
      return;
    } else {
      setErrorMessage('');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email ! ! !');
      return;
    } else {
      setErrorMessage('');
    }

    alert(`Thank you ${firstName}, your contact info has been submitted.`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
  };

 return (
   <div className='contact-form'>
     <h3>
       Hey {firstName}! Please leave your info and a short message and I'll get in contact with you ASAP!
     </h3>
     <form className="form">
       <input
         value={firstName}
         name="First name"
         onChange={handleInputChange}
         type="text"
         placeholder="First Name"
       />
       <input
         value={lastName}
         name="Last name"
         onChange={handleInputChange}
         type="text"
         placeholder="Last Name"
       />
       <input
         value={email}
         name="Email"
         onChange={handleInputChange}
         type="email"
         placeholder="Email"
       />
       <input
         value={message}
         name="Message"
         onChange={handleInputChange}
         type="text"
         placeholder="Please leave a short message..."
       />
       <button type="button" onClick={handleFormSubmit}>
         Submit
       </button>
     </form>
     {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
   </div>
 );
}