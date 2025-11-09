import { useState } from "react";
import { NoteProvider } from "../../context/NoteContext";
import { FormNotas } from "../components/Notas/FormNotas";
import Notas from "../components/Notas/ListNotas";
import { Search } from "../shared/Search";

export default function NotasPage() {
    const [busqueda, setBusqueda]= useState("")
    


  return (
   <div className="grid grid-cols-[400px_1fr]">
    <NoteProvider>
        <FormNotas/>
        <div className="">
            <Search  busqueda={busqueda} setBusqueda={setBusqueda} />
            <Notas busqueda={busqueda}/>
        </div>
    </NoteProvider>
   </div>
  );
}
