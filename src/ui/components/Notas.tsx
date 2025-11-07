// import { useEffect, useState } from "react";
// import { NoteUseCase } from "../../application/Note/CreateNoteUseCase";
// import { NoteApiService } from "../../infrastructure/api/NoteApiService";
// import { useAuthStatus } from "../../context/AuthContext";

// interface Nota {
//     id: string
//     annotations: string
//     courseId: string
//     tags: []
//     createdAt: string
//     updatedAt : string
// }


export default function Notas() {
    // const {user} = useAuthStatus()
    // const [notas, setNotas] = useState<Nota[]>([])


    // const noteservice = new NoteApiService()
    // const noteCase = new NoteUseCase(noteservice)

    // useEffect(()=>{
    //     async function TraerNotas() {

    //         if(!user) return

    //         try {
    //             const notasfetch = await noteCase.execute(user.id)
    //             // setNotas[notasfetch]
                
    //         } catch (error) {
    //             console.error("Error al trear notas ",error);
                
    //         }
    //     }

    //     TraerNotas()
    // },[user, noteCase])


  return (
    <div>
        notas

        {/* {notas.length === 0 
            ? <p>No hay notas</p>
            : notas.map((nota)=>(
                <p key={nota.id}>{nota.annotations}</p>
            ))} */}
    </div>
  );
}
