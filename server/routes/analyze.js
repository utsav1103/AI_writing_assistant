const express = require("express");
const axios = require("axios");
const analyzeRouter = express.Router();

analyzeRouter.post("/", async (req, res) => {

  const {sentence} = req.body;

  try{
    
    const response = await axios.post("https://api.openai.com/v1/completions", 
    {
      model: "gpt-4o-mini",
      messages:[
        {
          role: "system",
          content: "You are a grammar checker"
        },
        {role:'user',
          content: sentence,
        },
      ],
      max_tokens: 150,
      n: 3,
      stop: null,
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );
  
  const rephrase = response.data.choices.map((choice) => choice.message.content);
  res.status(200).json(rephrase || []);

  }catch(error){
    console.log(error);
    res.status(500).json({error: error.message});
    
    
  }
});

//export
module.exports = analyzeRouter;
