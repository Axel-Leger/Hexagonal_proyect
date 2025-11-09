import type { Busqueda } from "../../context/typesBusqueda";


export function Search({busqueda, setBusqueda}: Busqueda){

    return(
        <input 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="border w-full rounded px-3 py-1"
            type="text" 
            placeholder="Buscar..." />
    )
}