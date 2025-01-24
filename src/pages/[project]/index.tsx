import useRouteStore from '@/store/useRouteStore';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectPage() {
  const { project } = useParams();
  const { setProject } = useRouteStore();

  useEffect(() => {
    if (project !== undefined) {
      setProject(project);
    }
  }, [project, setProject]);

  return <>{project}</>;
}
