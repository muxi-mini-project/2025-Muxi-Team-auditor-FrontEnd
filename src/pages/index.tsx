import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-background">
        Hello World!
      </h1>
      <Link to="/components">
        <Button>Components</Button>
      </Link>
    </>
  );
}
