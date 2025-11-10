import { useCoursesContext } from "../../../context/CoursesContext"
import Button from "../../shared/Button";
import { Input } from "../../shared/Input";

export function CursosForm(){
  const { name, setName, handleCourse, setIsCompleted, isCompleted } = useCoursesContext();

        const handleCompleto = ()=>{
            setIsCompleted(true)
        }
    
        
        const handleIncompleto = ()=>{
            setIsCompleted(false)
        }

    return(
        <form className="px-4 py-2 flex flex-col gap-3">
            <div className="flex flex-col">
                <Input 
                    label="Nombre:"
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre del curso" />
            </div>

             <div className="">
                <label className="">Estado:</label>
                <div className="flex gap-2">
                    <button
                        className={`w-full px-4 py-2 rounded font-medium transition-all duration-300 
                            ${isCompleted === true 
                                ? "bg-[#9198be] text-white" 
                                : "border border-gray-300 text-gray-400 hover:bg-slate-100"
                            }`}
                        type="button"
                        onClick={handleCompleto} 
                    >
                        Completo
                    </button>
                     <button
                      className={`w-full px-4 py-2 rounded font-medium transition-all duration-300 
                        ${isCompleted === false 
                            ? "bg-[#9198be] text-white" 
                            : "border border-gray-300 text-gray-400 hover:bg-slate-100"
                        }`}
                        type="button"
                        onClick={handleIncompleto} 
                    >
                        Incompleto
                    </button>
                </div>
            </div>

            <Button 
                className="bg-indigo-400 py-2 rounded-md text-white hover:bg-indigo-500 hover:scale-102 transition-all duration-300 ease-in-out"
                onClick={handleCourse} type="submit">
                Enviar
            </Button>
        </form>
    )
}