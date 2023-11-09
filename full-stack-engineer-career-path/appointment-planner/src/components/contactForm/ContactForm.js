import React from 'react';

export const ContactForm = ({
  name, setName, phone, setPhone, email, setEmail, handleSubmit,
}) => {
  const handleNameChange = ({target}) => {
    const {value} = target;
    setName(value);
  };

  const handlePhoneChange = ({target}) => {
    const {value} = target;
    setPhone(value);
  };

  const handleEmailChange = ({target}) => {
    const {value} = target;
    setEmail(value);
  };

  return (<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Name" value={name}
           onChange={handleNameChange} required/>
    <input type="phone" placeholder="Phone" value={phone}
           onChange={handlePhoneChange} required/>
    <input type="email" placeholder="Email" value={email}
           onChange={handleEmailChange} required/>
    <button type="submit">Add Contact</button>
  </form>);
};
