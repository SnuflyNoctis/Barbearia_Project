import { ListagemPeriodo } from "../components/ListagemPeriodo";
import { Sidebar } from "../components/Sidebar";
import { useAppointments } from "../hooks/useAgendamentos"; // Ajuste o caminho se necessário

export default function AppointmentsPage() {
  const { addScheduling, removeScheduling, appointmentsByPeriod } =
    useAppointments();

  const dataHoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-950 text-gray-100 font-sans entialiased">
      <Sidebar onAdd={addScheduling} />

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

          <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 px-4 py-2.5 rounded-xl self-start sm:self-center">
            <span className="text-sm text-gray-300 font-medium">
              {" "}
              Data: {dataHoje}
            </span>
          </div>
        </header>

        <div className="space-y-2">
          <ListagemPeriodo
            titulo="Manhã"
            horarioLimite="09h-12h"
            agendamentos={appointmentsByPeriod.morning}
            onRemove={removeScheduling}
          />
          <ListagemPeriodo
            titulo="Tarde"
            horarioLimite="13h-18h"
            agendamentos={appointmentsByPeriod.afternoon}
            onRemove={removeScheduling}
          />

          <ListagemPeriodo
            titulo="Noite"
            horarioLimite="19h-21h"
            agendamentos={appointmentsByPeriod.night}
            onRemove={removeScheduling}
          />
        </div>
      </main>
    </div>
  );
}
