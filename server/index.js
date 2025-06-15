const express = require("express");
const app = express();
// const mongoose  = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

const todoRoutes = require("./routes/todoRoutes")
app.use("/api/v1",todoRoutes);

// app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//         return res.status(400).json({ error: "Invalid JSON format" });
//     }
//     next();
// });

const {dbconnect} = require("./config/Database")
dbconnect();

app.listen (PORT , ()=>{
   console.log(`server Started Successfully at port number ${PORT}`);
})

app.get("/",(req,res)=>{
   res.send(`<h1> This is the homepage of the server <h1/>`);
})