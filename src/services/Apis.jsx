const BASE_URL ="http://localhost:4000/api/v1" || process.env.BASE_URL

export const todoapis = {
   createtodo :`${BASE_URL}/createtodo`,
   updatetodo :`${BASE_URL}/updatetodo`,
   deletetodo :`${BASE_URL}/deletetodo`,
   gettodo :`${BASE_URL}/gettodo`,
   gettodobyid :`${BASE_URL}/gettodobyid`,
   markasdone :`${BASE_URL}/markasdone`,
}