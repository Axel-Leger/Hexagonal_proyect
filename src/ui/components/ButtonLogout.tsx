import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { LogoutUserUseCase } from "../../application/users/LogoutUserUseCase";
import { AuthApiService } from "../../infrastructure/api/AuthApiServices";
import { useAuthStatus } from "../../context/AuthContext";

export default function ButtonLogout() {
    const {user, setUser} = useAuthStatus()
    const navigate = useNavigate()

    // la funcion
    const logoutService = useMemo(()=> new AuthApiService(), []) 
    const logoutCase = useMemo(()=>new LogoutUserUseCase(logoutService), [logoutService]) 



    const handleLogout = async ()=>{
        try {

            if(user != null ){
                await logoutCase.execute()
                setUser(null)
            }else{
                navigate("/login")               
            }
            
        } catch (err) {   
            console.error("algo salio mal", err)
        }
        
    }




  return (
    <button onClick={handleLogout} className="">
        {user != null ? "Cerrar session":"Iniciar Session "}
    </button>
  );
}
