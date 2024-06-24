import './Card.css';

function Card({ card }) {

  return (
    <article className="card">
      <h2 className="card__title">{card.title}</h2>
      <div className="card__container">
        <ul className='card__list'>
          <li className='card__list_item html' data-html={card.dataItemOne}>{card.itemOne}</li>
          <li className='card__list_item css' data-css={card.dataItemTwo}>{card.itemTwo}</li>
          <li className='card__list_item js' data-js={card.dataItemThree}>{card.itemThree}</li>
          <li className='card__list_item git' data-git={card.dataItemFour}>{card.itemFour}</li>
        </ul>
        <div className='card__item'>
          <video autoPlay muted loop className="card__item_video">
            <source src={card.video} poster={card.poster} type='video/mp4' />
          </video>
        </div>        
      </div>
    </article>
  )
}

export default Card;