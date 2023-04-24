const { log } = require("console");
const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const path = require("path");
require('dotenv').config();
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.post("/generate-chart", async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const chartConfig = completion.data.choices[0].message.content;
    res.json({ success: true, chartConfig });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error generating chart configuration." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
