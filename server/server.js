import express from "express";
import cors from "cors";
import path from "path";

const PORT = process.env.PORT || 3001
const app = express();

const startServer = async () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cors());

  app.get("/api/quote", async (req, res) => {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  });

  if (process.env.NODE_ENV === "production") {
    // Get the current directory of the module using import.meta.url
    const __dirname = path.dirname(new URL(import.meta.url).pathname);
    const clientDistPath = path.join(__dirname, "../client/dist");

    // Serve static files from the dist directory
    app.use(express.static(clientDistPath));

    // Handle all routes by serving the index.html
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(clientDistPath, "index.html"));
    });
  }

  app.listen(PORT, () => console.log(`Server running on port ${PORT} 🔥`));
};

startServer();
