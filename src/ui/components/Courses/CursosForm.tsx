import { useCoursesContext } from "../../../context/CoursesContext"
import Button from "../../shared/Button";
import { Input } from "../../shared/Input";
import ButtonCompletoIncompleto from "./ButonsIncomComplet";

export function CursosForm(){
  const { name, setName, handleCourse} = useCoursesContext();
    return(
        <form className="px-4 py-2 flex flex-col gap-3">
            <Input 
                label="Nombre:"
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del curso" />

            <ButtonCompletoIncompleto label="Estado:" />

            <Button 
                variant={["grande", "default"]}
                className="bg-indigo-400 py-2 rounded-md text-white hover:bg-indigo-500 hover:scale-102 transition-all duration-300 ease-in-out"
                onClick={handleCourse} type="submit">
                Enviar
            </Button>
        </form>
    )
}