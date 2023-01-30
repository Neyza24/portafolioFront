import './contact.css';

const CardContact = ({ data }) => {
    return (

        <div className="contact__info">
            <div className="contact__card">
                <i className={`${data.icon} contact__card-icon`} ></i>

                <a href={data.info} target="_blank" className="contact__button" rel="noreferrer">{data.title}<i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>
            </div>
        </div>
    )
}

export default CardContact;
