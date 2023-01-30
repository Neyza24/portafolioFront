import CardContact from './CardContact';
import FormComponent from './FormComponent';
import { dataContact } from './dataContact';
import './contact.css';


const Contact = () => {
    return (
        <section className="contact section" id="contact">

            <h2 className="section__title">Sigamos en contacto</h2>
            <span className="section__subtitle">Si tienes alguna consulta, me puedes dejar un mensajito o seguir alguno de los enlaces a continuación</span>

            <div className="contact__container container grid">

                <div className="contact__content">
                    {
                        dataContact.map(data => {
                            return <CardContact data={data} key={data.id} />
                        })
                    }
                </div>

                <FormComponent />

            </div>

        </section>
    )
}

export default Contact;