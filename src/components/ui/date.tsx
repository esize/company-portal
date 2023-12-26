import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input, InputProps } from './input';
import { Calendar } from 'lucide-react';
import { useState } from 'react';

import type { MaskitoOptions } from '@maskito/core';
import { maskitoDateOptionsGenerator } from '@maskito/kit';
import { useMaskito } from '@maskito/react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './command';

const dateMask: MaskitoOptions = maskitoDateOptionsGenerator({
  mode: 'mm/dd/yyyy',
  separator: '/',
});

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [inputTime, setInputDate] = useState('');

    const dateNow = () => {
      const date = new Date();
      setInputDate(
        date.toLocaleDateString([], {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      );
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputDate(event.target.value);
    };

    const handleClick = () => {};

    const dateRef = useMaskito({ options: dateMask });

    return (
      <div className={cn('flex my-4', className)} ref={ref}>
        <Input
          type='text'
          value={inputTime}
          ref={dateRef}
          onChange={(e) => handleChange(e)}
          onClick={() => handleClick()}
          placeholder='mm/dd/yyyy'
          {...props}
        />
        <Calendar
          className='ml-2 flex self-center cursor-pointer'
          onClick={() => dateNow()}
        />
      </div>
    );
  }
);
DateInput.displayName = 'DateInput';

export { DateInput as DateInput };
