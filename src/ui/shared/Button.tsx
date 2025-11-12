import type React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

  // React.ReactNode: permite que chuldren pueda ser un: string, componente jsx,
  // numero, variables, booleanos, arrays
  children: React.ReactNode;
  variant?: ("default" | "danger" | "grande" | "pequeño")[];
}

export default function Button({
  className = "",
  children,
  variant = ["default"],
  ...props
}: ButtonProps) {

  const variants = {
    default: "bg-blue-500",
    danger: "bg-red-400",
    pequeño: "py-0.5",
    grande: "py-1.5"  
  }

  const variantClasses = variant.map(v => variants[v]).join(" ");
  
  return (
    <button className={`w-full  ${variantClasses}  text-white mt-1 rounded text-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-101`} {...props}>
      {children}
    </button>
  );
}
