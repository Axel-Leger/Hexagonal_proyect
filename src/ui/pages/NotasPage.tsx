import { useState } from "react";
import { NoteProvider } from "../../context/NoteContext";
import { FormNotas } from "../components/Notas/FormNotas";
import Notas from "../components/Notas/ListNotas";
import { Search } from "../shared/Search";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../../context/CoursesContext";

export default function NotasPage() {
    const [busqueda, setBusqueda]= useState("")
    const {id} = useParams()
    const {cursos} = useCoursesContext()

    const cursoActual = cursos.find((n) => n.id === id);
    

  return (
   <div className="grid gap-2 grid-rows-[auto_1fr]">

    {cursoActual && <div className="bg-slate-100 p-3 text-3xl">{cursoActual.name}</div>}
    


    <NoteProvider>
        <div className="grid grid-cols-[380px_1fr]">
            <FormNotas/>
            <div className="space-y-4 px-3">
                <Search  busqueda={busqueda} setBusqueda={setBusqueda} />
                <Notas busqueda={busqueda}/>
            </div>
        </div>
    </NoteProvider>
   </div>
  );
}
