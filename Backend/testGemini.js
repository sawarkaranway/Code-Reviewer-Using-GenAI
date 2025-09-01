require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent("Who is PM of India?");
    console.log("✅ Gemini Output:", result.response.text());
  } catch (err) {
    console.error("❌ Gemini Error:", err);
  }
}

testGemini();

