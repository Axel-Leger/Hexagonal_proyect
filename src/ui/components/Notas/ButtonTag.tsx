interface Buttonprops {
  texto: string;
  isSelected: boolean;
  onClick: (texto: string) => void
}

export function ButtonNote({ texto,isSelected, onClick  }: Buttonprops) {
  return(
    <button 
    type="button"
    onClick={() => onClick(texto)}
    className={`px-2 py-1 w-[150px] rounded border transition-colors 
        ${isSelected ? "bg-blue-600 text-white" : "bg-white text-black"}`}
    >
        {texto}
    </button>
  ) 
}