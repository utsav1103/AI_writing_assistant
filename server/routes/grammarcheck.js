const express = require("express");
const grammarCheckRouter = express.Router();
const axios = require("axios");

grammarCheckRouter.post("/", async (req, res) => {
  const {text} = req.body;
    try{
        
        const response = await axios.post("https://api.openai.com/v1/completions", 
        {
          model: "gpt-4o-mini",
          messages:[
            {
              role: "system",
              content: "You are a helpful assistant "
            },
            {role:'user',
              content: sentence,
            },
          ],
          max_tokens: 150,
          n: 1,
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
      
      const correctedText = response.data.choices[0].message.content;
      res.status(200).json(correctedText || []);
    
      }catch(error){
        console.log(error);
        res.status(500).json({error: error.message});
        
        
      }
  });
  
  //export
  module.exports = grammarCheckRouter;