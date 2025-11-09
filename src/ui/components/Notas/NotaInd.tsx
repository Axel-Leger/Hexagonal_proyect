import type { NoteFront } from "../../../Notes/domain/Note";
import { ActualizarNotas } from "./ActulizarNotas";
import ButtonDeleteNote from "./ButtonDeleteNote";

interface NotaIndProps {
  nota: NoteFront;
  color: string;
  shadow: string;
}

export function NotaInd({ nota, color, shadow }: NotaIndProps) {
  return (
    <div key={nota.id} className={`${color} ${shadow} w-full fles flex-col  lg:w-[48%]`}>
      <div>
        <p>{nota.annotations}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {nota.tags.length > 0 &&
          nota.tags.map((tag) => (
            <div className="border flex justify-center items-center rounded px-3" key={tag}>
              {tag}
            </div>
          ))}
      </div>

      <div>
        <ActualizarNotas id={nota.id} />
        <ButtonDeleteNote id={nota.id} />
      </div>
    </div>
  );
}
