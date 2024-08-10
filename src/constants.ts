export const headers = {
  Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMDUyNTIwMCwiZXhwIjoxNzUyMDYxMjAwfQ.dVOxycFVkwKu8wHfnGRyR1WOgGkizLGtkQ73UoGW1_4`,
  "Content-Type": "application/json",
};
export const endpoint = "https://successapi.onrender.com";


export type FiliereModel = {
  
  id?: number;
  nom: string;
  departement: string;
  description: string;
  perspectives: string;
  
  
};
 
 
export type UserModel = {
  
  id?: number;
  nom_et_prenom: string;
  genre: string;
  phone: string;
  type_bac: string;
  ville_origine: string;
  dominantForceTemperament: string;
  dominantWeaknessTemperament: string;
  temperament: string;
  skills: string;
  authentificationCode: string;
  
};
 

export interface Admin {
  emailAddress: string;
  password?: string;
  username: string;
  firstname: string;
  lastname: string;
  role: string;
  token?: string;
}

export interface ApiErrorResponse {
  message: string;

}
