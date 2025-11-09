import Button from "../../shared/Button";
import { useNoteContext } from "../../../context/NoteContext";
import { ButtonNote } from "./ButtonTag";


export function FormNotas() {
    const {annotations, tags, tagList, setTags,handleSubmit,setAnnotations} = useNoteContext()

      const handleTagClick = (tag: string) => {
        setTags((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
      };
    
  

  return (
    <form className="m-3 px-3 py-2 space-y-2">
        <div className="flex flex-col">
            <label htmlFor="annotation">Anotación:</label>
            <textarea
                id="annotation" 
                className="border rounded px-2 py-1"
                placeholder="Escriba cosas a tener en cuenta"
                value={annotations}
                onChange={(e) => setAnnotations(e.target.value)}
            />
        </div>

      <div>
        <p>Tags</p>
        <div className="flex justify-center flex-wrap gap-1 px-3 py-1 [&>button]:border [&>button]:rounded">
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

      <Button onClick={handleSubmit} className={`w-full`}>
        Enviar
      </Button>
    </form>
  );
}
