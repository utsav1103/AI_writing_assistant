const express = require("express");
const analyzeRouter = express.Router();

analyzeRouter.post("/", async (req, res) => {
  res.json({ message: "analyze route" });
});

//export
module.exports = analyzeRouter;
