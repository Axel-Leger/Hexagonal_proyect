 export default function Formulario(){
    return(
            <div className="w-[400px] space-y-3 py-4 px-6 rounded ">
                <p className="font-bold text-2xl">Crear tarea</p>
                <form className="[&_label]:text-lg [&_label]:font-semibold flex flex-col gap-2">
                   <div className="flex flex-col">
                        <label htmlFor="">Titulo:</label>
                        <input type="text" className=" border-2 rounded py-1 px-2" placeholder="ingrese el titulo de la tarea " />
                   </div>
                   <div className="flex flex-col">
                        <label htmlFor="">Descripcion:</label>
                        <textarea className=" border-2 rounded py-1 px-2" name="" id=""></textarea>
                   </div>
                     <div className="flex flex-col">
                        <label htmlFor="">Estado:</label>
                        <div className="space-x-2 [&>button]:border-2 [&>button]:px-4 [&>button]:rounded ">
                            <button>Completo</button>
                            <button>Incompleto</button>
                        </div>
                   </div>
                   <button className="text-xl mt-3 font-semibold border-2 rounded py-1.5">Enviar</button>
                </form>
            </div>
    )
 }