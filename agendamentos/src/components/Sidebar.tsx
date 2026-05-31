import type { FormEvent } from "react";
import { useState } from "react";
import type { NewScheduling } from "../types/Agendamento";
import { Button } from "./Button";
import { Input } from "./Input";

interface SidebarProps {
  onAdd: (data: NewScheduling) => void;
}

export function Sidebar({ onAdd }: SidebarProps) {
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAgendar = (e: FormEvent) => {
    e.preventDefault();

    if (!clientName || !date || !time) return;

    onAdd({
      clientName,
      date,
      time,
    });

    setClientName("");
    setDate("");
    setTime("");
  };

  return (
    <aside className="w-full md:w-96 bg-gray-800 border-r border-gray-700 p-8 flex flex-col h-full min-h-screen">
      <div className="mb-10">
        <h1 className="text-brand font-bold text-2xl flex items-center gap-2">
          <span className="text-3xl"></span> HairDay
        </h1>
      </div>

      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-100 mb-2">
          Agende um atendimento
        </h2>
        <p className="text-sm text-gray-300 mb-8">
          Selecione data, horário e informe o nome do cliente para criar o
          agendamento.
        </p>

        <form onSubmit={handleAgendar} className="flex flex-col gap-6">
          <Input
            label="Data"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <Input
            label="Horário"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />

          <Input
            label="Cliente"
            type="text"
            placeholder="Ex: João Victor"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />

          <div className="mt-4">
            <Button type="submit">Agendar</Button>
          </div>
        </form>
      </div>
    </aside>
  );
}
