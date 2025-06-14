const mongoose = require("mongoose");
require("dotenv").config();

exports.dbconnect = ()=>{
   mongoose.connect(process.env.MONGOOSE_URL)
   .then(()=>{
      console.log("Database conection made successfully")
   })
   .catch((e)=>{
      console.log(e.message);
      console.log("Error occured in making connection with the mongo DB");
      process.exit(1);
   })
}