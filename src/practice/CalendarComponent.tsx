import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CalendarComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  console.log(date);
  return (
    <div>
      <Calendar selected={date} onSelect={setDate} mode="single" />
    </div>
  );
}
