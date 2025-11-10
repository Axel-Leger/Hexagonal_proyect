import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import '@fontsource/poppins'; 
import { CoursesProvider } from './context/CoursesContext.tsx'
import { NoteProvider } from './context/NoteContext.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* contexto auth, ususario */}
    <AuthProvider>
      {/* contexto curso */}
      <CoursesProvider>
        {/* contexto notas */}
        <NoteProvider>
            <App />
        </NoteProvider>
      </CoursesProvider>
    </AuthProvider>
  </StrictMode>,
)
