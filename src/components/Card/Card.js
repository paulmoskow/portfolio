import { useEffect, useRef, useState } from 'react';

import './Card.css';
import useReducedMotion from '../../hooks/useReducedMotion';
import useTilt from '../../hooks/useTilt';

function Card({ project }) {
  const tilt = useTilt(4);
  const reducedMotion = useReducedMotion();
  const videoRef = useRef(null);
  // null for the system setting, true/false when user press the button
  const [userPaused, setUserPaused] = useState(null);
  const playing = userPaused === null ? !reducedMotion : !userPaused;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <article className="card">
      <h1 className="card__title">{project.title}</h1>
      <div className="card__container">
        <ul className="card__list">
          {project.tags.map((tag) => (
            <li
              key={tag.name}
              className="card__list_item"
              tabIndex={0}
              data-tooltip={tag.description}
            >
              {tag.name}
              <span className="visually-hidden">: {tag.description}</span>
            </li>
          ))}
        </ul>
        {project.video && (
          <div className="card__item" {...tilt}>
            <video
              ref={videoRef}
              autoPlay={playing}
              muted
              loop
              playsInline
              poster={project.poster}
              className="card__item_video"
              aria-label={`${project.title}: screen recording`}
            >
              <source src={project.videoWebm} type="video/webm" />
              <source src={project.video} type="video/mp4" />
            </video>
            <button
              type="button"
              className="card__item_toggle"
              onClick={() => setUserPaused(playing)}
              aria-label={playing ? 'Pause video' : 'Play video'}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                {playing ? (
                  <>
                    <rect x="3" y="2" width="3.5" height="12" />
                    <rect x="9.5" y="2" width="3.5" height="12" />
                  </>
                ) : (
                  <path d="M4 2l10 6-10 6z" />
                )}
              </svg>
            </button>
          </div>
        )}
      </div>
      <div className="card__links">
        <a className="card__link" href={project.links.live} target="_blank" rel="noopener noreferrer">
          Live
        </a>
        <a className="card__link" href={project.links.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

export default Card;
