import { CalendarDays, ChevronDown, CloudSun, Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";
import { ListagemPeriodo } from "../components/ListagemPeriodo";
import { Sidebar } from "../components/Sidebar";
import { useAppointments } from "../hooks/useAgendamentos";
import type { NewScheduling } from "../types/Agendamento"; // <-- Faltava essa importação!

export default function AppointmentsPage() {
  const {
    addScheduling,
    removeScheduling,
    schedulings,
    isSlotOccupied,
    getAppointmentsByDate,
  } = useAppointments();

  const [viewDate, setIsViewDate] = useState(
    () => new Date().toISOString().split("T")[0],
  );

  // Referência para o calendário funcionar clicando em qualquer lugar
  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleAddNewScheduling = (data: NewScheduling) => {
    addScheduling(data);
    setIsViewDate(data.date);
  };

  const dailyAppointments = getAppointmentsByDate(viewDate);
  const formattedViewDate = viewDate.split("-").reverse().join("/"); // <-- Para a data ficar DD/MM/AAAA

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      <Sidebar
        onAdd={handleAddNewScheduling}
        schedulings={schedulings}
        isSlotOccupied={isSlotOccupied}
      />

      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full animate-fade-in">
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 border-b border-gray-800 pb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-100">
              Sua agenda
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Consulte os seus cortes de cabelo agendados por dia
            </p>
          </div>

          <div
            onClick={() => dateInputRef.current?.showPicker()}
            className="relative flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2.5 rounded-xl self-start sm:self-center hover:border-gray-600 transition-colors cursor-pointer"
          >
            <CalendarDays className="text-brand w-5 h-5" />
            <span className="text-sm font-medium text-gray-200 tracking-wide mt-0.5">
              {formattedViewDate}
            </span>
            <ChevronDown className="text-gray-400 w-4 h-4 ml-1" />

            <input
              ref={dateInputRef}
              type="date"
              value={viewDate}
              onChange={(e) => setIsViewDate(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
            />
          </div>
        </header>

        <div className="space-y-2">
          {/* Mudei "icon" para "icone" para bater com a interface que criamos no ListagemPeriodo */}
          <ListagemPeriodo
            titulo="Manhã"
            icon={<Sun className="text-brand w-6 h-6 hover:animate-spin" />}
            horarioLimite="09h-12h"
            agendamentos={dailyAppointments.morning}
            onRemove={removeScheduling}
          />
          <ListagemPeriodo
            titulo="Tarde"
            icon={
              <CloudSun className="text-brand w-6 h-6 hover:-translate-y-1 transition-transform" />
            }
            horarioLimite="13h-18h"
            agendamentos={dailyAppointments.afternoon}
            onRemove={removeScheduling}
          />

          <ListagemPeriodo
            titulo="Noite"
            icon={
              <Moon className="text-brand w-6 h-6 hover:-rotate-12 transition-transform" />
            }
            horarioLimite="19h-21h"
            agendamentos={dailyAppointments.night}
            onRemove={removeScheduling}
          />
        </div>
      </main>
    </div>
  );
}
