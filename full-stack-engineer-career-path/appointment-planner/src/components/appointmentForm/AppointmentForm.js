import React from 'react';
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').
        split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleTitleChange = ({target}) => {
    const {value} = target;
    setTitle(value);
  };

  const handleDateChange = ({target}) => {
    const {value} = target;
    setDate(value);
  };

  const handleTimeChange = ({target}) => {
    const {value} = target;
    setTime(value);
  };

  const handleContactChange = ({target}) => {
    const {value} = target;
    setContact(value);
  };

  return (<form onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" value={title}
           onChange={handleTitleChange} required/>
    <input type="date" min={getTodayString()} value={date}
           onChange={handleDateChange} required/>
    <input type="time" value={time} onChange={handleTimeChange} required/>
    <ContactPicker contacts={contacts} onChange={handleContactChange}/>
    <button type="submit">Add Appointment</button>
  </form>);
};
