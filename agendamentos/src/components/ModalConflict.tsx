import { AlertCircle, X } from "lucide-react";

interface ModalConflictProps {
  isOpen: boolean;
  onClose: () => void;
  titulo: string; // <-- Adicionamos isso
  mensagem: string; // <-- Adicionamos isso
}

export function ModalConflict({
  isOpen,
  onClose,
  titulo,
  mensagem,
}: ModalConflictProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-gray-900 border border-gray-800 p-6 rounded-2xl max-w-sm w-full text-center shadow-2xl shadow-brand/5 relative scale-100 transition-transform">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 bg-brand/10 border border-brand/20 text-brand rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-8 h-8" />
        </div>

        {/* Agora o título e a mensagem vêm das propriedades! */}
        <h3 className="text-xl font-bold text-gray-100 mb-2">{titulo}</h3>

        <p className="text-sm text-gray-400 mb-6">{mensagem}</p>

        <button
          onClick={onClose}
          className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-gray-100 font-bold py-3 rounded-xl transition-all"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
