import '../sass/Error.scss';

export const Error = ({children}) => {
    return (
        <div className='error'>
            <p className='error__info'>{children}</p>
        </div>
    );
};
