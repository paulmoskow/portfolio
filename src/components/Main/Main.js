import { Link } from 'react-router-dom';

import './Main.css';
import projects from '../../data/projects';

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Web Yourself well</h2>
      <article className="main__container">
        {projects.map((project) => (
          <Link key={project.slug} className="main__item" to={`/project/${project.slug}`}>
            <video autoPlay muted loop playsInline className="main__item_video" poster={project.poster}>
              <source src={project.videoWebm} type="video/webm" />
              <source src={project.video} type="video/mp4" />
            </video>
            <div className="main__item_content">
              <h2 className="main__item_text">{project.title}</h2>
            </div>
          </Link>
        ))}
      </article>
    </main>
  );
}

export default Main;
