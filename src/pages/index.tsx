import { Button } from 'antd';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <Link to="/test">
        <Button type="primary">Button</Button>
      </Link>
    </>
  );
}
