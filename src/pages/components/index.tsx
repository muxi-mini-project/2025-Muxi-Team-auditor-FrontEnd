import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { StatusCheckbox } from '@/components/ui/StatusCheckbox';
import { TagCheckbox } from '@/components/ui/TagCheckbox';
import { Toggle } from '@/components/ui/Toggle';
import { TestPagination } from './TestPagination';
import { ImageButton } from '@/components/ui/ImageButton';

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
      <Button variant="pagination">◀ PREV</Button>
      <Button variant="pagination">NEXT ▶</Button>
      <Button variant="ai">AI终审</Button>
      <StatusCheckbox variant="done"></StatusCheckbox>
      <StatusCheckbox variant="pending"></StatusCheckbox>
      <StatusCheckbox variant="reject"></StatusCheckbox>
      <Toggle></Toggle>
      <TagCheckbox>Tag</TagCheckbox>
      <Checkbox></Checkbox>
      <TestPagination></TestPagination>
      <ImageButton direction="prev"></ImageButton>
      <ImageButton direction="next"></ImageButton>
    </div>
  );
}
