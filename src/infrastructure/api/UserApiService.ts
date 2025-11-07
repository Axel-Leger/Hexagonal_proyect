import type { UserContext } from "../../domain/User"; 
import type { UserRepository } from "../../domain/UserRepository"; 

export class UserApiService implements UserRepository {

  async getUser(): Promise<UserContext> {
    const user = localStorage.getItem("user")

    if(!user){
      throw new Error("No se encontro ningun usuario")
    }

    const parsedUser: UserContext = JSON.parse(user)

    return parsedUser
  }

}