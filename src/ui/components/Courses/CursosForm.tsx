import { useCoursesContext } from "../../../context/CoursesContext"
import Button from "../../shared/Button";

export function CursosForm(){
  const { name, setName, handleCourse, setIsCompleted, isCompleted } = useCoursesContext();

        const handleCompleto = ()=>{
            setIsCompleted(true)
        }
    
        
        const handleIncompleto = ()=>{
            setIsCompleted(false)
        }

    return(
        <form className="px-4 bg-blue-200 py-2 flex flex-col gap-3">
            <div className="flex flex-col">
                <label>Nombre:</label>
                <input 
                    className="border rounded px-3 py-1"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del curso" />
            </div>

             <div className="">
                <label>Estado:</label>
                <div className="flex gap-2 [&>button]:border [&>button]:px-3">
                    <button className={`${isCompleted === true ? "bg-green-500":""}`}
                        type="button"
                        onClick={handleCompleto} >
                        Completo
                    </button>
                    <button className={`${isCompleted === false ? "bg-red-300":""}`}
                        type="button"
                        onClick={handleIncompleto}>
                        Incompleto
                    </button>
                </div>
            </div>

            <Button onClick={handleCourse} type="submit">
                Enviar
            </Button>
        </form>
    )
}