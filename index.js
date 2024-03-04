const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Harshit Kumar full stack web developer.",
  });
});

app.listen(PORT, () => {
  console.log(`Server start at: ${PORT}`);
});
