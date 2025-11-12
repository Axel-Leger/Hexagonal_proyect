import Button from "../../shared/Button";
import { useNoteContext } from "../../../context/NoteContext";
import { ButtonNote } from "./ButtonTag";
import { TextArea } from "../../shared/textArea";


export function FormNotas() {
    const {annotations, tags, tagList, setTags,handleSubmit,setAnnotations} = useNoteContext()

      const handleTagClick = (tag: string) => {
        setTags((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
      };
    
  

  return (
    <form className="px-6 py-2 space-y-2 ">

    <p className="text-2xl tracking-wide"> Crear nueva nota:</p>

        <div className="flex flex-col">
            <label htmlFor="annotation">Anotación:</label>
            <TextArea 
                id="annotation" 
                placeholder="Escriba cosas a tener en cuenta"
                value={annotations}
                onChange={(e) => setAnnotations(e.target.value)}/>
        </div>

      <div>
        <p>Tags</p>
        <div className="grid gap-1.5 mt-1 grid-cols-2">
          {tagList.map((tag) => (
                <ButtonNote
                  key={tag}
                  texto={tag}
                  isSelected={tags.includes(tag)}
                  onClick={() => handleTagClick(tag)}
                />
          ))}
        </div>
      </div>

      <Button 
        variant={["grande", "default"]}
        onClick={handleSubmit}>
        Enviar
      </Button>
    </form>
  );
}
