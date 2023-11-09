import React, {useState} from 'react';
import {
  AppointmentForm,
} from '../../components/appointmentForm/AppointmentForm';
import {TileList} from '../../components/tileList/TileList';

export const AppointmentsPage = (props) => {
  const {appointments, contacts, onAppointmentAdd: addAppointment} = props;

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment({title, contact, date, time});
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (<div>
    <section>
      <h2>Add Appointment</h2>
      <AppointmentForm contacts={contacts} title={title} setTitle={setTitle}
                       setContact={setContact} date={date} setDate={setDate}
                       time={time} setTime={setTime}
                       handleSubmit={handleSubmit}/>
    </section>
    <hr/>
    <section>
      <h2>Appointments</h2>
      <TileList data={appointments}/>
    </section>
  </div>);
};
