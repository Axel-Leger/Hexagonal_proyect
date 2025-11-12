import { useCoursesContext } from "../../../context/CoursesContext";

interface ButtonCompIncom {
    label?: string
}

export default function ButtonCompletoIncompleto({label}:ButtonCompIncom){
    const {setIsCompleted, isCompleted } = useCoursesContext();

    const handleCompleto = ()=>{
        setIsCompleted(true)
    }
          
    const handleIncompleto = ()=>{
        setIsCompleted(false)
    }

    return(
        <div className="">
             {label && (
                <label className="">
                    {label}
                </label>
            )}
            <div className="flex gap-2">
                <button
                    className={`w-full px-4 py-2 rounded font-medium transition-all duration-300 
                        ${isCompleted === true 
                            ? "bg-[#63b491] text-white" 
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
                        ? "bg-[#d27b7f] text-white" 
                        : "border border-gray-300 text-gray-400 hover:bg-slate-100"
                    }`}
                    type="button"
                    onClick={handleIncompleto} 
                >
                    Incompleto
                </button>
            </div>
        </div>
    )
}