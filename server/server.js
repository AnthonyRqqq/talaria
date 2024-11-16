import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch"; // Make sure you have this imported if using `fetch` in Node.js

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  // API endpoint to fetch a random quote
  app.get("/api/quote", async (req, res) => {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  });

  // Handle production environment
  if (process.env.NODE_ENV === "production") {
    // Serve static files from the client build directory
    app.use(express.static(path.join(__dirname, "..", "client", "dist")));

    // Handle all other routes by sending index.html from the client build
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
    });
  }

  // Start the server
  app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
};

startServer();
