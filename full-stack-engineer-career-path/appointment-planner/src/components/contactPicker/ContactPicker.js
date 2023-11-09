import React from 'react';

export const ContactPicker = (props) => {
  const {contacts, onChange} = props;

  return (<select onChange={onChange} defaultValue="" required>
    <option value="" disabled>No contact selected</option>
    {contacts.map((contact, index) => <option key={index}
                                              value={contact.name}>{contact.name}</option>)}
  </select>);
};
