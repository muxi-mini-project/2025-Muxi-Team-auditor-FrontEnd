'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui/Calendar';
import { DateRange } from 'react-day-picker';

export function TestCalendar() {
  const [date, setDate] = React.useState<DateRange | undefined>(
    {} as DateRange
  );

  return (
    <div className="m-4">
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        className="w-80 rounded-md p-6"
      />
    </div>
  );
}
