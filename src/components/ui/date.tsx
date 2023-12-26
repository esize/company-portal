import * as React from "react";

import { cn } from "@/lib/utils";
import { Input, type InputProps } from "./input";
import { Calendar } from "lucide-react";
import { useState } from "react";

import type { MaskitoOptions } from "@maskito/core";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { useMaskito } from "@maskito/react";

const dateMask: MaskitoOptions = maskitoDateOptionsGenerator({
  mode: "mm/dd/yyyy",
  separator: "/",
});

const DateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [inputTime, setInputDate] = useState("");

    const dateNow = () => {
      const date = new Date();
      setInputDate(
        date.toLocaleDateString([], {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
      );
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputDate(event.target.value);
    };

    const dateRef = useMaskito({ options: dateMask });

    return (
      <div className={cn("my-4 flex", className)} ref={ref}>
        <Input
          type="text"
          value={inputTime}
          ref={dateRef}
          onChange={(e) => handleChange(e)}
          placeholder="mm/dd/yyyy"
          {...props}
        />
        <Calendar
          className="ml-2 flex cursor-pointer self-center"
          onClick={() => dateNow()}
        />
      </div>
    );
  },
);
DateInput.displayName = "DateInput";

export { DateInput as DateInput };
