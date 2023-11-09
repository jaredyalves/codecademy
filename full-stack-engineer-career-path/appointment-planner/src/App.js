import React, {useState} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import {AppointmentsPage} from './containers/appointmentsPage/AppointmentsPage';
import {ContactsPage} from './containers/contactsPage/ContactsPage';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: '/contacts', APPOINTMENTS: '/appointments',
  };

  const handleContactAdd = (contact) => {
    setContacts(prevState => [...prevState, contact]);
  };

  const handleAppointmentAdd = (appointment) => {
    setAppointments(prevState => [...prevState, appointment]);
  };

  return (<>
    <nav>
      <NavLink to={ROUTES.CONTACTS} activeClassName="active">
        Contacts
      </NavLink>
      <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
        Appointments
      </NavLink>
    </nav>
    <main>
      <Switch>
        <Route exact path="/">
          <Redirect to={ROUTES.CONTACTS}/>
        </Route>
        <Route path={ROUTES.CONTACTS}>
          <ContactsPage contacts={contacts} onContactAdd={handleContactAdd}/>
        </Route>
        <Route path={ROUTES.APPOINTMENTS}>
          <AppointmentsPage appointments={appointments}
                            contacts={contacts}
                            onAppointmentAdd={handleAppointmentAdd}/>
        </Route>
      </Switch>
    </main>
  </>);
};

export default App;