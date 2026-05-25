import { useState } from "react";
import type { Scheduling, NewScheduling } from "../types/Agendamento";
import { isMorning, afternoonTime, isNight } from "../utils/Periodos";

export function useAppointments() {
  const [schedulings, setSchedulings] = useState<Scheduling[]>([]);

  const addScheduling = (data: NewScheduling) => {
    const newScheduling: Scheduling = {
      ...data,
      id: crypto.randomUUID(),
    };

    setSchedulings((prev) => [...prev, newScheduling]);
  };

  const removeScheduling = (id: string) => {
    setSchedulings((prev) => prev.filter((sd) => sd.id !== id));
  };

  const appointmentsByPeriod = {
    morning: schedulings.filter((sd) => isMorning(sd.time)),
    afternoon: schedulings.filter((sd) => afternoonTime(sd.time)),
    night: schedulings.filter((sd) => isNight(sd.time)),
  };

  return {
    schedulings,
    addScheduling,
    removeScheduling,
    appointmentsByPeriod,
  };
}