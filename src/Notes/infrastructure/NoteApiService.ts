import type {  Note, NoteFront } from "../domain/Note";  
import type { NoteRepository } from "../domain/NoteRepository"; 

const API_URL = 'http://localhost:3000/api/notes';

export class NoteApiService implements NoteRepository {
  
async getNote(courseId: string): Promise<NoteFront[]> {
  const res = await fetch(`${API_URL}/course/${courseId}`)

  const data = await res.json()
  console.log(data);
  

  return data
}

async creteNote(note: Note): Promise<void> {
  const res = await fetch(`${API_URL}`,{
    method:"POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(note)
  })

  if(!res.ok) throw new Error("Error al traer notas desde el caso de uso")

  console.log("Nota creado correctamente");
}


async DeleteNote(id: string): Promise<void> {
  const res = await fetch(`${API_URL}/${id}`, {
  method: 'DELETE'
})

if(!res.ok) throw new Error("Error al eliminar la nota caso de uso")

console.log("Nota eliminada correctamente");

}

async PutNote(id: string, data: { annotations: string; tags: string[]; }): Promise<void> {
   const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })

        if(!res.ok) {
            throw new Error("Error al actualizar el curso")
        } else{
            console.log("Curso actualizado correctamente");
        }
}

}

