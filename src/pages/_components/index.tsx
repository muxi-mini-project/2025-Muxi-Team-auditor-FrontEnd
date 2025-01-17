import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import { StatusCheckbox } from '@/components/StatusCheckbox';
import { TagCheckbox } from '@/components/TagCheckbox';
import { Toggle } from '@/components/ui/Toggle';
import { ImageButton } from '@/components/ImageButton';
import { LargeToggle, SmallToggle } from '@/components/CrazyToggle';

import { TestPagination } from './TestPagination';
import { TestCalendar } from './TestCalendar';
import { Input } from '@/components/ui/Input';
import { SearchInput } from '@/components/SearchInput';

export default function Page() {
  return (
    <>
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
        <ImageButton direction="prev"></ImageButton>
        <ImageButton direction="next"></ImageButton>
        <LargeToggle></LargeToggle>
        <SmallToggle></SmallToggle>
        <Input className="w-32"></Input>
        <SearchInput
          placeholder="Search..."
          containerClassName="w-64"
          action={(value) => alert(value)}
        />
      </div>
      <TestPagination></TestPagination>
      <TestCalendar></TestCalendar>
    </>
  );
}
