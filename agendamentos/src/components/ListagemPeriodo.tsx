import { CalendarX2 } from "lucide-react";
import type { ReactNode } from "react";
import type { Scheduling } from "../types/Agendamento";
import { CardAgendamento } from "./CardAgendamento";

interface ListagemPeriodoProps {
  titulo: string;
  icon: ReactNode;
  horarioLimite: string;
  agendamentos: Scheduling[];
  onRemove: (id: string) => void;
}

export function ListagemPeriodo({
  titulo,
  icon,
  horarioLimite,
  agendamentos,
  onRemove,
}: ListagemPeriodoProps) {
  return (
    <section className="mb-10 animate-fade-in group">
      <div className="flex items-center gap-3 border-b border-gray-800 pb-3 mb-5 transition-colors group-hover:border-gray-700">
        {icon}
        <h2 className="text-xl font-bold text-gray-100">{titulo}</h2>
        <span className="ml-auto text-gray-500 text-sm font-medium">
          {horarioLimite}
        </span>
      </div>

      {agendamentos.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 p-8 bg-gray-900/50 border border-gray-800 border-dashed rounded-xl animate-fade-in transition-colors hover:border-gray-700 hover:bg-gray-800/30">
          <CalendarX2
            className="text-gray-600 w-10 h-10 opacity-50"
            strokeWidth={1.5}
          />
          <p className="text-gray-500 text-sm">
            Nenhum agendamento para este período.
          </p>
        </div>
      ) : (
        <div className="flex flex-col">
          {agendamentos.map((agendamento) => (
            <CardAgendamento
              key={agendamento.id}
              data={agendamento}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </section>
  );
}
