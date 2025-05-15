const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy user for login
const user = {
  username: "indra",
  password: "123",
};

// Login endpoint
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
