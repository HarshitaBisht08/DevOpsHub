const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`DevOpsHub server running on http://localhost:${PORT}`);
});