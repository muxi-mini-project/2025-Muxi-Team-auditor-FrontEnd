import { Button } from '@/components/ui/Button';

export default function Page() {
  return (
    <div className="flex flex-wrap gap-4 m-4">
      <Button>DEFAULT</Button>
      <Button variant="pass">PASS</Button>
      <Button variant="pending">PENDING</Button>
      <Button variant="reject">REJECT</Button>
      <Button variant="confirm">CONFIRM</Button>
      <Button variant="complete">COMPLETE</Button>
      <Button variant="cancel">CANCEL</Button>
    </div>
  );
}
