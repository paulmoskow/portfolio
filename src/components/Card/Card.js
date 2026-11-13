import './Card.css';

function Card({ project }) {
  return (
    <article className="card">
      <h2 className="card__title">{project.title}</h2>
      <div className="card__container">
        <ul className="card__list">
          {project.tags.map((tag) => (
            <li
              key={tag.kind}
              className={`card__list_item ${tag.kind}`}
              {...{ [`data-${tag.kind}`]: tag.description }}
            >
              {tag.name}
            </li>
          ))}
        </ul>
        <div className="card__item">
          <video autoPlay muted loop playsInline poster={project.poster} className="card__item_video">
            <source src={project.videoWebm} type="video/webm" />
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      </div>
    </article>
  );
}

export default Card;
