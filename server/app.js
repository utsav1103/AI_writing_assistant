require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const analyzeRouter = require("./routes/analyze");
const grammarCheckRouter = require("./routes/grammarcheck");
const spellCheckRouter = require("./routes/spellCheck");
const app = express();



//Middleware
app.use(cors());//prevent cors origin error
app.use(express.json()); // for parsing application/json


//Routes
app.use("/api/analyze", analyzeRouter);
app.use('/api/grammarcheck', grammarCheckRouter);
app.use('/api/spellcheck', spellCheckRouter);

//start the server
app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`);
});