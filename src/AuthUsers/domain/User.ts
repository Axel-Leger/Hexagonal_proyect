
// Esto es para lo que pide el bakend
export interface User {
  id: string;
  name: string;
  email: string;
  password: string
};

//Y esto es para lo que devuelve 
export interface UserContext {
    message: string
    id: string
    name: string
    email: string
}