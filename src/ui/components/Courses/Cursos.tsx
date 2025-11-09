import { Link } from "react-router-dom"
import { useCoursesContext } from "../../../context/CoursesContext"
import IsCompleteCompnent from "./isCompleteComponent"
import type { Busqueda } from "../../../context/typesBusqueda"
import ButtonDeleteCourse from "./ButtonDeleteCourse"
import { ActualizarCurso } from "./ActualizarCourse"




export function Cursos({busqueda}:Omit<Busqueda, "setBusqueda">) {  
    const {cargando, cursos} = useCoursesContext()    
    
        const cursosFiltrados = cursos.filter((curso) => {
            const texto = busqueda.toLowerCase();

            return curso.name.toLowerCase().includes(texto)
        });
        
        
    return(
        <div className="flex justify-center lg:justify-start flex-wrap gap-3 p-4">

            {cargando && <p>Cargando...</p>}

            {cursosFiltrados.length === 0 
                ? 
                <p>No hay cursos</p>
                :
                cursosFiltrados.map((curso)=>(
                    <div key={curso.id} className="w-[300px] h-[200px] grid grid-rows-[1fr_auto]">
                        
                        <Link to={`/notas/${curso.id}`} className="flex w-full items-end relative rounded-t bg-blue-300 px-4 py-1">
                            <h1 className="font-bold text-2xl">{curso.name}</h1>
                            <IsCompleteCompnent>
                                <p className="absolute right-4 top-1">{curso.isCompleted === false 
                                    ? "Incompleto"
                                    : "Completo" }</p>
                            </IsCompleteCompnent>
                        </Link>
                        <div className=" bg-green-300 flex justify-end px-2 py-1">
                            <ActualizarCurso cursoid={curso.id}/>
                            <ButtonDeleteCourse id={curso.id}/>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}