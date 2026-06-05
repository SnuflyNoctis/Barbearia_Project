import { useState } from "react";
import type { NewScheduling, Scheduling } from "../types/Agendamento";
import { afternoonTime, isMorning, isNight } from "../utils/Periodos";

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

  const isSlotOccupied = (date: string, time: string) => {
    return schedulings.some((ag) => ag.date === date && ag.time === time);
  };

  const appointmentsByPeriod = {
    morning: schedulings.filter((sd) => isMorning(sd.time)),
    afternoon: schedulings.filter((sd) => afternoonTime(sd.time)),
    night: schedulings.filter((sd) => isNight(sd.time)),
  };

  const getAppointmentsByDate = (selectedDate: string) => {
    const dailySchedulings = schedulings.filter(
      (ag) => ag.date === selectedDate,
    );

    return {
      morning: dailySchedulings.filter((ag) => isMorning(ag.time)),
      afternoon: dailySchedulings.filter((ag) => afternoonTime(ag.time)),
      night: dailySchedulings.filter((ag) => isNight(ag.time)),
    };
  };

  return {
    schedulings,
    addScheduling,
    removeScheduling,
    appointmentsByPeriod,
    isSlotOccupied,
    getAppointmentsByDate,
  };
}
