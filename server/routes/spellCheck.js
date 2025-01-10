const express = require('express');
const spellCheckRouter = express.Router();

spellCheckRouter.post("/", async (req, res) => {    
    res.json({ message: "spell check route" });
  });   

module.exports = spellCheckRouter;  