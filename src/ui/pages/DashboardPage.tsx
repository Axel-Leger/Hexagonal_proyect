"use client";

import ButtonLogout from "../components/ButtonLogout";
import { Cursos } from "../components/Cursos";
import { CursosForm } from "../components/CursosForm";
// import Notas from "../components/Notas";

export default function DashboardPage() {


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 flex justify-between bg-white border-b border-gray-200">
        <h1 className="text-3xl font-black text-gray-900">
          Administrador de Cursos
        </h1>
        <ButtonLogout/>
      </div>

      <div className="grid grid-cols-[300px_1fr]">
        
        <div className="h-full w-full bg-blue-200">
          <h1>Cursos</h1>
            {/* cursos */}
           <CursosForm/>
        </div>

        <Cursos/>
      </div>
    </div>
  );
}
