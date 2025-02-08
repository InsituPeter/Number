const express = require("express");
const cors = require("cors");
const routes = require("./routes/numberRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/v1", routes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
