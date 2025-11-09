import type { NoteFront } from "../Notes/domain/Note"

export interface NoteContextType{
    notas: NoteFront[]
    cargando:boolean
    tagList:string[]
    annotations:string
    setTags:React.Dispatch<React.SetStateAction<string[]>>
    tags:string[]
    setResfrecarNote:React.Dispatch<React.SetStateAction<boolean>>
    handleSubmit:(e: React.FormEvent) => Promise<void>
    setAnnotations: React.Dispatch<React.SetStateAction<string>>
}

export interface NoteProviderProps {
    children: React.ReactNode
}

