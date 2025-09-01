require('dotenv').config()
const app = require('./src/app')
app.listen(3000,()=>{
    console.log('Server is running on localhost')
    console.log("Gemini Key:", process.env.GOOGLE_GEMINI_KEY ? "Loaded ✅" : "❌ Missing");

})