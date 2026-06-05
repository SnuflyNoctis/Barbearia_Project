import { Menu, X } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";
import type { NewScheduling, Scheduling } from "../types/Agendamento";
import { Button } from "./Button";
import { Input } from "./Input";
import { ModalConflict } from "./ModalConflict";
import { TimeSelect } from "./TimeSelect";

import logoHairDay from "../assets/HairTheme.svg";

interface SidebarProps {
  onAdd: (data: NewScheduling) => void;
  schedulings: Scheduling[];
  isSlotOccupied: (date: string, time: string) => boolean;
}

export function Sidebar({ onAdd, schedulings, isSlotOccupied }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [clientName, setClientName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    titulo: "",
    mensagem: "",
  });

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  const occupiedTimesForSelectedDate = schedulings
    .filter((ag) => ag.date === date)
    .map((ag) => ag.time);

  const handleAgendar = (e: FormEvent) => {
    e.preventDefault();

    if (!time) {
      setModalConfig({
        isOpen: true,
        titulo: "Selecione um horário",
        mensagem:
          "Tente marcar para outro dia ou outro período do dia caso haja vaga.",
      });
      return;
    }

    if (isSlotOccupied(date, time)) {
      setIsModalOpen(true);
      return;
    }

    if (isSlotOccupied(date, time)) {
      setModalConfig({
        isOpen: true,
        titulo: "Horário Indisponível",
        mensagem:
          "Ops! Esse horário já está reservado para este dia. Por favor, escolha outro.",
      });
      return;
    }

    onAdd({
      clientName,
      date,
      time,
    });

    setClientName("");
    setDate("");
    setTime("");
    setIsOpen(false);
  };

  return (
    <>
      <ModalConflict
        isOpen={modalConfig.isOpen}
        titulo={modalConfig.titulo}
        mensagem={modalConfig.mensagem}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
      />
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-6 left-6 z-40 p-3 bg-gray-800 text-brand rounded-xl border border-gray-700 shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static top-0 left-0 z-50 h-full w-[85%] max-w-sm md:w-96 bg-gray-900/95 md:bg-gray-900/80 backdrop-blur-md border-r border-gray-800 p-8 flex flex-col shadow-2xl shadow-brand/10 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <img src={logoHairDay} alt="Logo HairDay" className="h-8 w-auto" />

          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-100 bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <h2 className="text-xl font-bold text-gray-100 mb-2">
            Agende um atendimento
          </h2>
          <p className="text-sm text-gray-400 mb-8 font-medium">
            Selecione data, horário e informe o nome do cliente para criar o
            agendamento.
          </p>

          <form
            onSubmit={handleAgendar}
            className="animate-fade-in flex flex-col gap-6 pb-8"
          >
            <Input
              label="Data"
              type="date"
              value={date}
              min={tomorrowStr}
              onChange={(e) => {
                setDate(e.target.value);
                setTime("");
              }}
              required
            />

            <TimeSelect
              value={time}
              onChange={setTime}
              ocuppiedTimes={occupiedTimesForSelectedDate}
              disabledAll={!date}
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
    </>
  );
}
