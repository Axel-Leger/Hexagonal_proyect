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
        
        const colores = ["bg-emerald-200","bg-indigo-200", "bg-purple-200", "bg-pink-200"];

        
    return(
        <div className="flex justify-center lg:justify-start flex-wrap gap-3 p-4">

            {cargando && <p>Cargando...</p>}

            {cursosFiltrados.length === 0 
                ? 
                <p>No hay cursos</p>
                :
                cursosFiltrados.map((curso, index)=>{

                    const color = colores[index % colores.length];

                    return(
                        <div key={curso.id} className={`w-full md:w-[300px] ${color} h-[200px] shadow rounded grid grid-rows-[1fr_auto]`}>
                            
                            <Link to={`/notas/${curso.id}`} className="flex w-full items-end relative rounded-t px-4 py-1">
                                <h1 className="font-bold text-2xl">{curso.name}</h1>
                                <IsCompleteCompnent>
                                    <p className={`absolute right-2 top-2  px-3 rounded text-sm ${curso.isCompleted === false  ? "bg-red-300":" bg-emerald-400"} `}>
                                        {curso.isCompleted === false 
                                            ? "Incompleto"
                                            : "Completo" }
                                    </p>
                                </IsCompleteCompnent>
                            </Link>
                            <div className="bg-slate-100/40 text-sm gap-2 rounded-b flex justify-end p-2">
                                <ActualizarCurso cursoid={curso.id}/>
                                <ButtonDeleteCourse id={curso.id}/>
                            </div>
                        </div>
                    )})
            }
        </div>
    )
}