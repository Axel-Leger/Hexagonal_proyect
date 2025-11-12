import type { NoteFront } from "../../../Notes/domain/Note";
import { ActualizarNotas } from "./ActulizarNotas";
import ButtonDeleteNote from "./ButtonDeleteNote";


interface NotaIndProps {
  nota: NoteFront;
  color: string;
  shadow: string;
   abierto: string | null;
  setAbierto: React.Dispatch<React.SetStateAction<string | null>>;
}

export function NotaInd({ nota, color, shadow, abierto, setAbierto }: NotaIndProps) {

const estaAbierto = abierto === nota.id;

  const handleClick = () => {
     if (!estaAbierto) {
        setAbierto(nota.id);
    }
  };
  
  return (
    <div onClick={ ()=> handleClick()} key={nota.id} className={`${color} ${shadow}  rounded-sm border-b-2 border-r-2 flex flex-col 
        ${estaAbierto ? "transform scale-125 z-30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px]  fixed":"w-full px-4 py-2 gap-2 lg:w-[48%]"} `}>
      <div className={` text-start ${estaAbierto ? "px-4 pt-4 pb-2":""} `}>
        <p className="whitespace-pre-wrap">{nota.annotations}</p>
      </div>

    {nota.tags.length > 0 &&
        estaAbierto ? 
        <div className="flex mt-2 py-2 px-3 bg-slate-800/5 items-center flex-wrap gap-2">
            { nota.tags.map((tag) => (
                <div className="border py-0.5 flex text-sm rounded px-2" key={tag}>
                    {tag}
                </div>
                )) }
        </div>
        :
        <div className="flex items-center flex-wrap gap-2">
            { nota.tags.slice(0,4).map((tag) => (
                <div className="border py-0.5 flex text-sm rounded px-2" key={tag}>
                    {tag}
                </div>
                )) }

                
                {nota.tags.length > 4 && (
                    <span className="text-sm text-gray-500">+{nota.tags.length - 4}</span>
                )} 
                
        </div>
    }

    {estaAbierto && 
        <div className=" flex p-2  bg-slate-800/10 justify-end gap-2">
            <ActualizarNotas id={nota.id} />
            <ButtonDeleteNote abierto={abierto} setAbierto={setAbierto} id={nota.id} />
        </div>
    }
     
    </div>
  );
}
