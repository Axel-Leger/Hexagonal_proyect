import {useState } from "react";
import Button from "../shared/Button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserUseCase } from "../../application/users/LoginUserUseCase";
import { AuthApiService } from "../../infrastructure/api/AuthApiServices";
import { useAuthStatus } from "../../context/AuthContext";


export default function LoginPage() {
  const {setUser} = useAuthStatus()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const authService = new AuthApiService()
    const loginUser = new LoginUserUseCase(authService)

    try {
        const userContext = await loginUser.execute({email, password})
        setUser(userContext)
        navigate("/dashboard")
        
    } catch (Error) {
        console.error(Error);
    }
 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800"> Iniciar session</h1>
          <p className="text-gray-600 mt-2 ">
            Ingresa tu informacion para poder Iniciar session
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          
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
            Iniciar session
          </Button>
        </form>
        <div className="flex mt-4 gap-2">
          <p className="cursor-pointer">Aun no tienes cuenta?</p>
          <Link to={"/register"} >Registrate</Link>
        </div>
      </div>
    </div>
  );
}
