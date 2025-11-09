import {
   useState } from "react";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";

import { AuthApiService } from "../../AuthUsers/infrastructure/AuthApiServices";
import { RegisterUserUseCase } from "../../AuthUsers/application/RegisterUserUseCase";


export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
          
    const authService = new AuthApiService()
    const registerUser = new RegisterUserUseCase(authService)

    try {
      const newUser = await registerUser.execute({name, email, password})

      console.log("Usuario creado:", newUser);

      setTimeout(()=>{
        navigate("/login")
      }, 3000)
      
    } catch (Error) {
      console.error(Error);    
    }
 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Registrar cuenta</h1>
          <p className="text-gray-600 mt-2 ">
            Ingresa tu informacion para registrarte
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Pepito Alcachofa"
              required
            />
          </div>

          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="tu@email.com"
              required
            />
          </div>

           <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="PepitoAlcachoso123"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Registrar
          </Button>
        </form>
        <div className="flex mt-4 gap-2">
          <p className="cursor-pointer">Ya tienes cuenta?</p>
          <Link to={"/login"} >Iniciar Session</Link>
        </div>
      </div>
    </div>
  );
}
