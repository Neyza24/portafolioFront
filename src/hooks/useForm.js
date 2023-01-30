import { useState } from "react";

export const useForm = (initialForm = {}, onValidate) => {

    const [formState, setFormState] = useState(initialForm);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});


    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const onHandleSubmit = (event) => {
        event.preventDefault();
        const err = onValidate(formState);
        setErrors(err);


        if (Object.keys(err).length === 0) {
            setLoading(true);

            fetch("https://formsubmit.co/ajax/neyza_blme@hotmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            })
                .then(response => response.json())
                .then(data => {
                    data.success === 'true' && setFormState(initialForm);
                    setLoading(false);

                    setTimeout(() => {
                        alert('Tu mensaje fue enviado exitosamente')
                    }, 1000)
                })
                .catch(error => {
                    console.log(error)
                    setLoading(false)

                });
        }

    }

    return {
        ...formState,
        formState,
        loading,
        onInputChange,
        onResetForm,
        onHandleSubmit,
        errors
    }
}