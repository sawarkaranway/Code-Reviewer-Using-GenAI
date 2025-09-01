require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function generateResponse(prompt) {
  try {
    console.log("👉 Generating response for prompt length:", prompt.length);

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: `You are a code reviewer and complexity analyser.Give Short and easy to understand response. Look at the code provided and analyse its complexity tell whetre the code can be improved and what could be its optimal approach.` 
    });

    const result = await model.generateContent(prompt);
    console.log("✅ Raw Gemini Response:", result);

    return result.response.text();

  } catch (err) {
    console.error("❌ AI Service Error:", err);
    throw err;  // return mat karo, throw karo taaki controller pakde
  }
}

module.exports = { generateResponse };



