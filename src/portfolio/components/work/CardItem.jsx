
const CardItem = ({ data }) => {

  return (
    <div className="work__card">
      <img src={data.image} alt={data.title} className="work__img" />
      <h3 className="work__title"> {data.title}</h3>
      <p className='work__description'>{data.description}</p>
      <a href={data.url} target="_blank" rel="noreferrer" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}

export default CardItem;