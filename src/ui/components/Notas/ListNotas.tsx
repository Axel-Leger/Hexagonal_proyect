import { useNoteContext } from "../../../context/NoteContext";
import type { Busqueda } from "../../../context/typesBusqueda";
import { NotaInd } from "./NotaInd";


export default function Notas({busqueda}:Omit<Busqueda, "setBusqueda">) {
  const {notas,cargando} = useNoteContext()

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
    <div className="flex flex-wrap p-4 gap-2 ">
        {cargando && <p>Cargando...</p>}

        {notasFiltrados.length === 0 
            ? <p>No hay notas</p>
            : 
             notasFiltrados.map((nota, index)=>{

              // cambiar color del bg y sombra
              const color = colores[index % colores.length];
              const shadow = shadows[index % shadows.length];
              
                return(
                 <NotaInd nota={nota} color={color} shadow={shadow}/>
                )
          })
                    }
              </div>
            );
          }
