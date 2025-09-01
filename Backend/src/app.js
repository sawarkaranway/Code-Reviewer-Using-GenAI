const express = require("express");
const app = express();

// ✅ JSON body parser (sabse zaroori)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const aiRoutes = require("./routes/ai.routes");
app.use("/ai", aiRoutes);

module.exports = app;
