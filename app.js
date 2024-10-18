const express = require('express');
const app = express();
require("dotenv").config();
require("./mongoose-coonection") 
const routes = require("./routes/track");  


app.use(express.json());


app.use("/", routes);

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
});
