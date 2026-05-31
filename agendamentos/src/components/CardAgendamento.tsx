import type { Scheduling } from "../types/Agendamento";

interface CardAgendamentoProps {
  data: Scheduling;
  onRemove: (id: string) => void;
}

export function CardAgendamento({ data, onRemove }: CardAgendamentoProps) {
  return (
    <div className="flex items-center gap-4 bg-gray-600 p-4 rounded-xl mb-3 animate-slide-up border border-gray-500/30 hover:border-gray-500 transtion-all group">
      <span className="text-brand font-bold text-lg w-14">{data.time}</span>

      <span className="text-gray-100 flex-1 font-medium text-base truncate">
        {data.clientName}
      </span>

      <button
        onClick={() => onRemove(data.id)}
        className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-gray-500/50"
        title="Remover agendamento"
        aria-label="Remover"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  );
}
