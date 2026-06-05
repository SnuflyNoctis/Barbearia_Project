interface TimeSelectProps {
  value: string;
  onChange: (time: string) => void;
  ocuppiedTimes?: string[];
  disabledAll?: boolean;
}

export function TimeSelect({
  value,
  onChange,
  ocuppiedTimes = [],
  disabledAll = false,
}: TimeSelectProps) {
  const horarios = {
    Manhã: ["09:00", "10:00", "11:00", "12:00"],
    Tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    Noite: ["19:00", "20:00", "21:00"],
  };

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      <label className="text-sm font-bold text-gray-200">Horários</label>

      <div className="flex flex-col gap-5">
        {Object.entries(horarios).map(([periodo, listaHorarios]) => (
          <div key={periodo}>
            <span className="text-sm text-gray-400 mb-2 block">{periodo}</span>
            <div className="flex flex-wrap gap-2 p-2 -ml-1">
              {listaHorarios.map((hora) => {
                const isSelected = value === hora;
                const isOcuppied = ocuppiedTimes.includes(hora);
                const isDisabled = disabledAll || isOcuppied;

                return (
                  <button
                    key={hora}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => onChange(hora)}
                    className={`
                      px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none
                      ${
                        isDisabled
                          ? "bg-gray-800/30 text-gray-600 ring-1 ring-gray-800/50 cursor-not-allowed" // <-- A MÁGICA: Trocamos border por ring-1
                          : isSelected
                            ? "bg-gray-800 text-brand scale-105 shadow-md shadow-brand/10 ring-2 ring-brand"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100 ring-1 ring-transparent hover:ring-gray-600"
                      }
                    `}
                  >
                    {hora}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
