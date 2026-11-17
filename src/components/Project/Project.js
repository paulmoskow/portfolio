import { Navigate, useParams } from 'react-router-dom';

import Card from '../Card/Card';
import projects from '../../data/projects';
import usePageMeta from '../../hooks/usePageMeta';

function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  usePageMeta(
    project ? `${project.title} | Pavel Moskov` : 'Pavel Moskov | Web Engineer',
    project ? `${project.title} by Pavel Moskov. Built with ${project.tags.map((tag) => tag.name).join(', ')}.` : null
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main">
      <Card project={project} />
    </main>
  );
}

export default Project;
