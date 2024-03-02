import React, { useState } from 'react';

function Form() {
  const [validEmail, setValidEmail] = useState(true);
  const [validPhone, setValidPhone] = useState(true)
  const [inputField, setInputField] = useState({
    fName: '',
    lName: '',
    add: '',
    country: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputField((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetAllInput();
  };

  const resetAllInput = () => {
    setInputField({
      fName: '',
      lName: '',
      add: '',
      country: '',
      email: '',
      phone: ''
    });
  };

  const validateEmail = (email) => {
    return String(email).toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleEmailChange = (e) => {
    const isValidEmail = validateEmail(e.target.value);
    isValidEmail ? setValidEmail(true) : setValidEmail(false);
    setInputField((prevState) => ({
      ...prevState,
      email: e.target.value
    }));
  };

  const validatePhone = (phone) => {
    return phone.match(/^\d{10}$/);
  };

  const handleMobileNumberChange = (e) => {
    const isValidPhone = validatePhone(e.target.value);
    isValidPhone ? setValidPhone(true) : setValidPhone(false);
    setInputField((prevState) =>( {
      ...prevState,
      phone: e.target.value
    }))
  };


  return (
    <div>
      <h1>Thank you so much for taking the time!</h1>
      <p>Please provide the below details!</p>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label> <br />
        <input type="text" placeholder="John" value={inputField.fName} onChange={handleInputChange} name="fName" /> <br />

        <label>Last Name:</label> <br />
        <input type="text" placeholder="Doe" required value={inputField.lName} onChange={handleInputChange} name="lName" /> <br />

        <label>Address:</label> <br />
        <input type="text" placeholder="Enter full postal Address" required value={inputField.add} onChange={handleInputChange} name="add" /> <br />

        <label>Country:</label> <br />
        <input type="text" placeholder="" required value={inputField.country} onChange={handleInputChange} name="country" /> <br />

        <label>Email ID:</label> <br />
        <input type="email" required onChange={handleEmailChange} value={inputField.email} />
        <p className={validEmail ? 'hide warning' : 'show warning'}>Please enter valid e-mail</p>
        <br />

        <label>Phone Number:</label> <br />
        <input type="number" required onChange={handleMobileNumberChange} value={inputField.phone} /> <br />
        <p className={validPhone ? 'hide warning' : 'show warning'}>Please enter a valid 10-digit phone number</p>
        
        <button>Submit Feedback</button>
      </form>
    </div>
  );
}

export default Form;
