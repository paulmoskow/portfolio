import { Link } from 'react-router-dom';

import './Main.css';
import projects from '../../data/projects';
import useReducedMotion from '../../hooks/useReducedMotion';
import useTilt from '../../hooks/useTilt';

function ProjectTile({ project, index }) {
  const tilt = useTilt(9);
  const reducedMotion = useReducedMotion();

  return (
    <Link
      className="main__item"
      to={`/project/${project.slug}`}
      style={{ '--delay': `${index * 120}ms` }}
      {...tilt}
    >
      {project.preview && (
        <video autoPlay={!reducedMotion} muted loop playsInline preload="metadata" className="main__item_video" poster={project.poster}>
          <source src={project.previewWebm} type="video/webm" />
          <source src={project.preview} type="video/mp4" />
        </video>
      )}
      <div className="main__item_content">
        <h2 className="main__item_text">{project.title}</h2>
      </div>
    </Link>
  );
}

function Main() {
  return (
    <main className="main">
      <h2 className="main__title">Web Yourself well</h2>
      <article className="main__container">
        {projects.map((project, index) => (
          <ProjectTile key={project.slug} project={project} index={index} />
        ))}
      </article>
    </main>
  );
}

export default Main;
