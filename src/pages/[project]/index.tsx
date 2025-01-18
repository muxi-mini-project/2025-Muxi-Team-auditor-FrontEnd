import { useParams } from 'react-router-dom';

export default function ProjectPage() {
  const { project } = useParams();
  if (project != undefined) {
    return <div>{project}</div>;
  } else {
    return <div>404</div>;
  }
}
