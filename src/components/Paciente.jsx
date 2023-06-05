import '../sass/Paciente.scss';

export const Paciente = ({tempPatient, setPatient, deletePatient}) => {

    const {name, owner, email, offPatient, symptoms, id} = tempPatient;
    const handleDelete = () => {
        const answer = confirm('¿Deseas eliminar este paciente?');
        if(answer) {
            deletePatient(id);
        }
    }
    return (
        <div className='patient'>
            <p className='patient__listName patient__item'>Nombre: <span>{name}</span></p>
            <p className='patient__listOwner patient__item'>Propietario: <span>{owner}</span></p>
            <p className='patient__listEmail patient__item'>Email: <span>{email}</span></p>
            <p className='patient__listName patient__item'>fecha alta: <span>{offPatient}</span></p>
            <p className='patient__listName patient__item'>Sintomas: <span>{symptoms}</span></p>
            <div className='patient__buttons-container'>
                <button 
                    className='patient__button patient__button-edit' 
                    type='button'
                    onClick={() => setPatient(tempPatient)}
                >
                    Editar
                </button>
                <button 
                    className='patient__button patient__button-delete' 
                    type='button'
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

