import { Navigate, useParams } from 'react-router-dom';

import Card from '../Card/Card';
import projects from '../../data/projects';

function Project() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

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
