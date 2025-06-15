const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const {getTodoById,getTodo} = require("../controllers/getTodo");
const {markAsDone} = require("../controllers/markAsDone");


 router.post("/createtodo",createTodo);          
router.put("/updatetodo/:id",updateTodo);
 router.delete("/deletetodo/:id",deleteTodo); 
router.get("/gettodobyid/:id",getTodoById);
 router.get("/gettodo",getTodo);
 router.put("/markasdone/:id",markAsDone);


module.exports = router;