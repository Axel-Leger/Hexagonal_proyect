import type React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}


export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="">
          {label}
        </label>
      )}
      <input
        className={`border rounded px-2 py-1 w-full ${className}`}
        {...props}
      />
    </div>
  );
}


