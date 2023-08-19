'use client';

import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/Button';
import { Calendar } from '@/components/ui/Calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import { formatDate } from '@/lib/helpers';
import { cn } from '@/lib/utils';

interface DatePickerProps {
  selectedDate: string | Date | null;
  onDateChange: (date: Date) => void;
  className?: string;
}

export function DatePicker({
  selectedDate,
  onDateChange,
  className = '',
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn('w-[240px] pl-3 text-left font-normal', className)}
        >
          {selectedDate ? (
            formatDate(selectedDate.toString())
          ) : (
            <span>Wybierz datę</span>
          )}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate as Date}
          onSelect={(date) => onDateChange(date as Date)}
          // disable dates before today
          disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
