import { useState } from "react";
import { useNoteContext } from "../../../context/NoteContext";
import type { Busqueda } from "../../../context/typesBusqueda";
import { NotaInd } from "./NotaInd";


export default function Notas({busqueda}:Omit<Busqueda, "setBusqueda">) {
  const {notas,cargando} = useNoteContext()
  const [abierto, setAbierto] = useState<string | null>(null);


    const notasFiltrados = notas.filter((nota) => {
      const texto = busqueda.toLowerCase();

      const coincideAnotacion = nota.annotations.toLowerCase().includes(texto);
        const coincideTag = nota.tags.some((tag) =>
          tag.toLowerCase().includes(texto)
        );

        return coincideAnotacion || coincideTag;
    });

    // arrays
    const colores = ["bg-yellow-100","bg-blue-100", "bg-green-100", "bg-red-100"];
    const shadows = ["shadow-yellow-200","shadow-blue-200", "shadow-green-200", "shadow-red-200"];


  return (
    <div className="flex flex-wrap gap-4 ">
        {cargando && <p>Cargando...</p>}

        {abierto && <button onClick={()=> setAbierto(null)} className="bg-black/40 backdrop-blur-xs z-20 fixed w-full h-full top-0 left-0"/>}

        {notasFiltrados.length === 0 
            ? <p>No hay notas</p>
            : 
             notasFiltrados.map((nota, index)=>{

              // cambiar color del bg y sombra
              const color = colores[index % colores.length];
              const shadow = shadows[index % shadows.length];
              
                return(
                 <NotaInd abierto={abierto} setAbierto={setAbierto} nota={nota} color={color} shadow={shadow}/>
                )
          })
                    }
              </div>
            );
          }
