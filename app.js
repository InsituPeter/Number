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

//Error-handling
app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).json({error:"Internal server Error"})})
// 404 Handler
app.use((req, res) => {
  res.status(404).json( `This path does not exist`);
});

// Server Start
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
