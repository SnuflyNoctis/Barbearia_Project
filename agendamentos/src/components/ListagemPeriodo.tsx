import type { Scheduling } from "../types/Agendamento";
import { CardAgendamento } from "./CardAgendamento";

interface ListagemPeriodoProps {
  titulo: string;
  horarioLimite: string;
  agendamentos: Scheduling[];
  onRemove: (id: string) => void;
}

export function ListagemPeriodo({
  titulo,
  horarioLimite,
  agendamentos,
  onRemove,
}: ListagemPeriodoProps) {
  return (
    <section className="mb-10 animate-fade-in">
      <div className="flex items-center gap-3 border-b border-gray-700 pb-3 mb-5">
        <h2 className="text-xl font-bold text-gray-100">{titulo}</h2>
        <span className="ml-auto text-gray-400 text-sm font-medium">
          {horarioLimite}
        </span>
      </div>

      {agendamentos.length === 0 ? (
        <p className="text-gray-400 text-sm mt-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700 border-dashed">
          Você ainda não tem agendamentos cadastrados nesse período.
        </p>
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
