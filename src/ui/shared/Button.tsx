import type React from "react";

// React.ButtonHTMLAttributes<HTMLButtonElement> nos deja usar las funciones 
// tipicas con el onclic, type, value, etc del button sin tener declarar una 
// por una, 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "outline";

  // React.ReactNode: permite que chuldren pueda ser un: string, componente jsx,
  // numero, variables, booleanos, arrays
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  
  const base = "px-4 py-2 rounded font-medium transition";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
