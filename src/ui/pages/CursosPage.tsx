"use client";

import { useState } from "react";
import { CoursesProvider } from "../../context/CoursesContext";
import ButtonLogout from "../components/ButtonLogout";
import { Cursos } from "../components/Courses/Cursos";
import { CursosForm } from "../components/Courses/CursosForm";
import { Search } from "../shared/Search";

export default function DashboardPage() {
  const [busqueda, setBusqueda]= useState("")



  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      
      <div className="p-4 flex justify-between bg-white border-b border-gray-200">
        <h1 className="text-3xl font-black text-gray-900">
          Administrador de Cursos
        </h1>
        <ButtonLogout/>
      </div>

      <div className="grid grid-cols-[300px_1fr]">
        {/* contexto Courser */}
        <CoursesProvider>

          {/* formulario */}
          <CursosForm/>

          {/* cursos */}
          <div className="bg-slate-100 p-2">
            <Search busqueda={busqueda} setBusqueda={setBusqueda} />
            <Cursos busqueda={busqueda}/>
          </div>
          
        </CoursesProvider>
      </div>
    </div>
  );
}
