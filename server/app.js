const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8000;



//Middleware
app.use(cors());//prevent cors origin error
app.use(express.json()); // for parsing application/json


//start the server
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)});