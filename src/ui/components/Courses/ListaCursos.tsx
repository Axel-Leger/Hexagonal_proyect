import { Link } from "react-router-dom"
import { useCoursesContext } from "../../../context/CoursesContext"
import ButtonDeleteCourse from "./ButtonDeleteCourse"
import { ActualizarCurso } from "./ActualizarCourse"
import { useEffect, useState } from "react"

export interface CursosProps {
    busqueda: string;
}

interface Nota {
  id: string;
  annotations: string; 
  courseId: string;
  tags: string[];
  createdAt: string;
}

interface CursoNotas {
  idCurso: string;
  notas: Nota[];
}


export function Cursos({busqueda}:CursosProps) {  
    const {cargando, cursos} = useCoursesContext() 

    // connstante para la busqueda
    const [notasCursos, setNotasCursos] = useState<CursoNotas[]>([]);

    // toda la logica para trear todos los cursos
    useEffect(() => {
        const fetchNotas = async () => {
        const cursosId = cursos.map((curso) => curso.id);

        const notasCursosData = await Promise.all(
            cursosId.map(async (id) => {
            const res = await fetch(`http://localhost:3000/api/notes/course/${id}`);
            if (!res.ok) throw new Error("Error al traer las notas");
            const data = await res.json();
            return { idCurso: id, notas: data } as CursoNotas;
            })
        );

        setNotasCursos(notasCursosData);
        };

        if (cursos.length > 0) {
        fetchNotas();
        }
    }, [cursos]);


    // logica de filtros
    const cursosFiltrados = cursos.filter((curso) => {
        const texto = busqueda.toLowerCase();

        const notasDeEsteCurso = notasCursos.find(
        (notas) => notas.idCurso === curso.id
        )?.notas || [];

        const hayCoincidenciaEnNotas = notasDeEsteCurso.some((nota) =>
        nota.annotations.toLowerCase().includes(texto)
        );

        return (
            curso.name.toLowerCase().includes(texto) ||
            hayCoincidenciaEnNotas
        );
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
                                <div>
                                    <p className={`absolute right-2 top-2  px-3 rounded text-sm ${curso.isCompleted === false  ? "bg-red-300":" bg-emerald-400"} `}>
                                        {curso.isCompleted === false 
                                            ? "Incompleto"
                                            : "Completo" }
                                    </p>
                                </div>
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