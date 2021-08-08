const express = require("express");

const app = express();

app.get("/api", (req, res) =>
  res.json({ message: "welcome to the 2FA example" })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is live on port ${PORT}`));
