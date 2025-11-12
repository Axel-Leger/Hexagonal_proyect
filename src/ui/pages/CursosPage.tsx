"use client";

import { useState } from "react";
import ButtonLogout from "../components/ButtonLogout";
import { CursosForm } from "../components/Courses/CursosForm";
import { Search } from "../shared/Search";
import { Cursos } from "../components/Courses/ListaCursos";

export default function DashboardPage() {
  const [busqueda, setBusqueda]= useState("")


  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      
      <div className="p-4 flex justify-between bg-white border-b border-gray-200">
        <h1 className="text-3xl font-black text-slate-800">
          Administracion de Cursos
        </h1>
        <ButtonLogout/>
      </div>

      <div className="grid grid-cols-[300px_1fr] min-h-0">
        {/* contexto Courser */}

          {/* formulario */}
          <CursosForm/>

          {/* cursos */}
          <div className="bg-slate-100 p-2 overflow-auto min-h-0">
            <Search busqueda={busqueda} setBusqueda={setBusqueda} />
            <Cursos busqueda={busqueda}/>
          </div>
          
      </div>
    </div>
  );
}
