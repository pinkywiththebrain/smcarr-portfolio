import React, { useState } from 'react';

export default function Contact() {
 // Here we set two state variables for firstName and lastName using `useState`
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, username, and password
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
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Thank you ${firstName}, your contact info has been submitted.`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

 return (
   <div>
     <p>
       Hello {firstName} {lastName}
     </p>
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