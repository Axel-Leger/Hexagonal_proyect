import type React from "react";

// React.ButtonHTMLAttributes<HTMLButtonElement> nos deja usar las funciones 
// tipicas con el onclic, type, value, etc del button sin tener declarar una 
// por una, 
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  // React.ReactNode: permite que chuldren pueda ser un: string, componente jsx,
  // numero, variables, booleanos, arrays
  children: React.ReactNode;
}

export default function Button({
  className = "",
  children,
  ...props
}: ButtonProps) {
  
  return (
    <button className={`${className}`} {...props}>
      {children}
    </button>
  );
}
