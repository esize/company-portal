import * as React from "react";

import { cn } from "@/lib/utils";
import { Input, type InputProps } from "./input";
import { Clock } from "lucide-react";
import { useState } from "react";

import type { MaskitoOptions } from "@maskito/core";
import { maskitoTimeOptionsGenerator } from "@maskito/kit";
import { useMaskito } from "@maskito/react";

const timeMask: MaskitoOptions = maskitoTimeOptionsGenerator({
  mode: "HH:MM",
});

const TimeInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [inputTime, setInputTime] = useState("");
    const timeNow = () => {
      const date = new Date();
      setInputTime(
        date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputTime(event.target.value);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const inputTime = event.target.value;
      const date = new Date();
      date.setHours(parseInt(inputTime.split(":")[0] ?? ""));
      date.setMinutes(parseInt(inputTime.split(":")[1] ?? ""));
      setInputTime(
        date.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      );
    };

    const timeRef = useMaskito({ options: timeMask });

    return (
      <div className={cn("my-4 flex", className)} ref={ref}>
        <Input
          type="text"
          value={inputTime}
          ref={timeRef}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
          placeholder="hh:mm"
          {...props}
        />
        <Clock
          className="ml-2 flex cursor-pointer self-center"
          onClick={() => timeNow()}
        />
      </div>
    );
  },
);
TimeInput.displayName = "TimeInput";

export { TimeInput as TimeInput };
