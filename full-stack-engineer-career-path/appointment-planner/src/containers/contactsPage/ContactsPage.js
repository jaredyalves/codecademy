import React, {useEffect, useState} from 'react';
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';

export const ContactsPage = (props) => {
  const {contacts, onContactAdd: addContact} = props;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicateName) return;

    addContact({name, phone, email});
    setName('');
    setPhone('');
    setEmail('');
  };

  useEffect(() => {
    if (contacts.find(contact => contact.name === name)) {
      setDuplicateName(true);
    } else {
      setDuplicateName(false);
    }
  }, [name]);

  return (<div>
    <section>
      <h2>Add Contact</h2>
      <ContactForm name={name} phone={phone} email={email} setName={setName}
                   setPhone={setPhone} setEmail={setEmail}
                   handleSubmit={handleSubmit}/>
    </section>
    <hr/>
    <section>
      <h2>Contacts</h2>
      <TileList data={contacts}/>
    </section>
  </div>);
};