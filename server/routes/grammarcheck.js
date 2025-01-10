const express = require("express");
const grammarCheckRouter = express.Router();

grammarCheckRouter.post("/", async (req, res) => {
    res.json({ message: "grammar check route" });
  });
  
  //export
  module.exports = grammarCheckRouter;