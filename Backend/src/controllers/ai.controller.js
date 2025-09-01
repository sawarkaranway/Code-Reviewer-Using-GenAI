const { generateResponse } = require("../services/ai.service");

module.exports.getReview = async (req, res) => {
  try {
    console.log("👉 Request Body:", req.body);

    const { code } = req.body;   // req.body se code nikaal rahe

    if (!code) {
      console.log("❌ Code missing in request body");
      return res.status(400).json({ error: "Code is required" });
    }

    console.log("👉 Sending code to AI Service...");
    const response = await generateResponse(code);

    console.log("✅ AI Service Response:", response);
    res.json({ output: response });

  } catch (err) {
    console.error("❌ AI Controller Error:", err);
    res.status(500).json({ error: "Internal Server Error", details: err.message });
  }
};






