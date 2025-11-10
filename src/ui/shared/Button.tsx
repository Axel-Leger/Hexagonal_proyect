import type React from "react";
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
    <button className="w-full text-white mt-1 bg-blue-500 rounded py-1.5 text-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-101" {...props}>
      {children}
    </button>
  );
}
