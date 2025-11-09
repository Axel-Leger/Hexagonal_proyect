import { useNoteContext } from "../../../context/NoteContext";
import type { Busqueda } from "../../../context/typesBusqueda";
import { ActualizarNotas } from "./ActulizarNotas";
import ButtonDeleteNote from "./ButtonDeleteNote";




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
  

  return (
    <div className="flex flex-col gap-4">
        {cargando && <p>Cargando...</p>}

        {notasFiltrados.length === 0 
            ? <p>No hay notas</p>
            : 
             notasFiltrados.map((nota)=>(
                  <div key={nota.id} className="bg-red-100 rounded">
                    <p>{nota.annotations}</p>
                    <div className=" flex gap-2">
                      {nota.tags.length > 0 
                        &&
                        nota.tags.map((tag)=>(
                          <div key={tag} className="px-2 bg-blue-200">
                            {tag}
                          </div>
                        ))
                      }
                    </div>
                    <div className="">
                      <ActualizarNotas id={nota.id}/>
                      <ButtonDeleteNote id={nota.id}/>
                    </div>
                  </div>
                ))
          }
    </div>
  );
}
