require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));

// test route
app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT} in ${process.env.NODE_ENV}`);
});
