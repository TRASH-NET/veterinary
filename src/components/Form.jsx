import { useEffect, useState } from 'react';
import { Error } from './Error';
import '../sass/Form.scss';

export const Form = ({patients, setPatients, patient, setPatient}) => {
    
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [offPatient, setOffPatient] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(() => {
        if(Object.keys(patient).length > 0){
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setOffPatient(patient.offPatient);
            setSymptoms(patient.symptoms);
        }
    }, [patient]);

    

    const generarID = () => {
        const date = Date.now().toString(36);
        const random = Math.random().toString(36).substring(2);
        
        return (date + random);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // * Validacion del formulario 

        if ([name, owner, email, offPatient, symptoms].includes('')) {
            setError(true);
            return;
        }
        setError(false);

        // * Object patient
        const objectPatient = {
            name,
            owner,
            email,
            offPatient,
            symptoms,   
        };
        if(patient.id){
            // ? Editando registro
            objectPatient.id = patient.id
            const currentPatient = patients.map(patientState => {
                return (patientState.id === patient.id ? objectPatient : patientState)
            });
            setPatients(currentPatient);
            setPatient({});
        }else{
            // * Nuevo registro
            objectPatient.id = generarID();
            setPatients([...patients, objectPatient]);
        }


        // * Reset form

        setName('');
        setOwner('');
        setEmail('');
        setOffPatient('');
        setSymptoms('');
    };

    return (
        <div className='form'>
            <h2 className='form__title'>Seguimiento Pacientes</h2>
            <p className='form__addPatient'>Añade Pacientes y <span>Administralos</span></p>
            <form action="" className='form__action' onSubmit={handleSubmit}>
                {error && <Error>Todos los campos son obligatorios</Error>}
                <div className='form__actionContainer'>
                    <label className='form__label-namePet form__label' htmlFor="namePet">Nombre Mascota
                        <input
                            className='form__namePet form__input'
                            type="text"
                            placeholder='Nombre de la mascota'
                            id='namePet'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form__actionContainer'>
                    <label className='form__label-nameOwner form__label' htmlFor="nameOwner">Nombre Propietario
                        <input
                            className='form__nameOwner form__input'
                            type="text"
                            placeholder='Nombre del propietario'
                            id='nameOwner'
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form__actionContainer'>
                    <label className='form__label-email form__label' htmlFor="email">Email
                        <input
                            className='form__email form__input'
                            type="email"
                            placeholder='Email Contacto Propietario'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form__actionContainer'>
                    <label className='form__label-offPatient form__label' htmlFor="offPatient">Alta
                        <input
                            className='form__offPatient form__input'
                            type="date"
                            id='offPatient'
                            value={offPatient}
                            onChange={(e) => setOffPatient(e.target.value)}
                        />
                    </label>
                </div>
                <div className='form__actionContainer'>
                    <label className='form__label-symptoms form__label' htmlFor="symptoms">Sintomas
                        <textarea 
                            className='form__symptoms form__input'
                            placeholder='Describe los sintomas'
                            id='symptoms'
                            value={symptoms}
                            onChange={(e) => setSymptoms(e.target.value)}                           
                        />
                    </label>
                </div>
                <input 
                    className='form__submit'
                    type="submit"
                    value={patient.id ? 'Editar paciente' : 'Agregar paciente'}
                />
            </form>
        </div>
    );
};
