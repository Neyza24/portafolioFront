import { useForm } from '../../../hooks/useForm';


const FormComponent = () => {

    const initialData = {
        name: '',
        email: '',
        message: ''
    }

    const onValidate = (formState) => {

        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexMessage = /^.{1,255}$/;

        if (!formState.name.trim()) {
            errors.name = 'El campo de Nombre no debe ser vacío';
        } else if (!regexName.test(formState.name)) {
            errors.name = 'El campo de Nombre solo acepta letras y espacios.';
        } else if (formState.name.length < 2) {
            errors.name = 'Su nombre debe contener al menos 2 caracteres';
        }

        if (!formState.email.trim()) {
            errors.email = 'El campo de Email no debe ser vacío';
        } else if (!regexEmail.test(formState.email)) {
            errors.email = 'El campo de Email contiene un formato no válido';
        }

        if (!formState.message.trim()) {
            errors.message = 'El campo de Mensaje no debe ser vacío';
        } else if (!regexMessage.test(formState.message)) {
            errors.message = 'El campo de Mensaje acepta solo 255 caracteres como máximo';
        }
        return errors;
    }

    
    const { formState, loading, errors, onInputChange, onHandleSubmit } = useForm(initialData, onValidate);

    return (
        <div className="contact__content">


            <form className="contact__form" onSubmit={onHandleSubmit}>
                <div className="contact__form-div">
                    {/* <label className="contact__form-tag">Nombre</label> */}
                    <input
                        type="text"
                        name="name"
                        className="contact__form-input"
                        placeholder='Ingresa tu nombre'
                        value={formState.name}
                        onChange={onInputChange}
                    />
                </div>
                {
                    errors.name && <div className='alert alert-danger p-2 form-alert'>{errors.name}</div>
                }

                <div className="contact__form-div">
                    {/* <label className="contact__form-tag">Email</label> */}
                    <input
                        type="email"
                        name="email"
                        className="contact__form-input"
                        placeholder='Ingresa tu email'
                        value={formState.email}
                        onChange={onInputChange}
                    />
                </div>
                {
                    errors.email && <div className='alert alert-danger p-2 form-alert'>{errors.email}</div>
                }

                <div className="contact__form-div contact__form-area">
                    {/* <label className="contact__form-tag">Mensaje</label> */}
                    <textarea
                        name="message"
                        cols="30"
                        rows="10"
                        className='contact__form-input'
                        placeholder='Escribe tu mensajito aquí'
                        value={formState.message}
                        onChange={onInputChange}
                    >
                    </textarea>
                </div>

                {
                    errors.message && <div className='alert alert-danger p-2 form-alert'>{errors.message}</div>
                }

                <button className="button button--flex" disabled={loading}>

                    {
                        loading ? 'Enviando...' : 'Enviar Mensaje'
                    }
                </button>
                
            </form>
        </div>
    )
}

export default FormComponent;