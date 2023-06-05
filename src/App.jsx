import { Header } from './components/Header';
import { Form } from './components/Form';
import { ListadPacientes } from './components/ListadPacientes';
import './sass/App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);



  const deletePatient = (id) => {
    const currentsPatients = patients.filter(patient => patient.id !== id);
    setPatients(currentsPatients);
  };

  return (
    <div className='app'>
      <Header/>
      <div className='app__container'>
        <Form
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient = {setPatient}
        />
        <ListadPacientes
          patients = {patients}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />
      </div>
      
    </div>
  );
}

export default App;
