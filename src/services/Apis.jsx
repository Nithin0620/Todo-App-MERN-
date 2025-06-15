const BASE_URL =process.env.BASE_URL || "http://localhost:5000/api/v1"

export const todoapis = {
   createtodo :`${BASE_URL}/createtodo`,
   updatetodo :`${BASE_URL}/updatetodo`,
   deletetodo :`${BASE_URL}/deletetodo`,
   gettodo :`${BASE_URL}/gettodo`,
   gettodobyid :`${BASE_URL}/gettodobyid`,
   markasdone :`${BASE_URL}/markasdone`,
}