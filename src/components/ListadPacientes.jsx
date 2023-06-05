import '../sass/ListadoPacientes.scss';
import {Paciente} from '../components/Paciente';

export const ListadPacientes = ({patients, setPatient, deletePatient}) => {
    
    return (
        <div className="listadoPacientes">
            {patients && patients.length ? (
                <>
                    <h2 className='listadoPacientes__title'>Listado pacientes</h2>
                    <p className='listadoPacientes__info'>Administra tus <span>Pacientes y Citas</span></p>
                    <div className='listadoPacientes__list-container'>
                    {patients.map( (tempPatient) => {
                        return(
                            <Paciente
                                key={tempPatient.id}
                                tempPatient = {tempPatient}
                                setPatient = {setPatient}
                                deletePatient = {deletePatient}
                            />
                        );
                    })}
                    </div>
                </>
                
            ): (
                    <>
                        <h2 className='listadoPacientes__title'>No hay pacientes</h2>
                        <p className='listadoPacientes__info'>Comienza agregando pacientes <span>y apareceran en este lugar</span></p>
                        <div className='listadoPacientes__list-container'>
                        {patients.map( (tempPatient) => {
                            return(
                                <Paciente
                                    key={tempPatient.id}
                                    tempPatient = {tempPatient}
                                />
                            );
                        })}
                        </div>
                    </>
                )}
            
            
        </div>
    );
};


