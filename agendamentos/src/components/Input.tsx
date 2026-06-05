import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 px-2 w-full animate-fade-in">
        {label && (
          <label htmlFor={id} className="text-sm font-bold text-gray-200">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";
