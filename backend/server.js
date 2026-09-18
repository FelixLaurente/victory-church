import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./routes/api.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "victory-church-api" });
});

app.use("/api", api);

app.listen(port, () => {
  console.log(`Victory Church API running on http://localhost:${port}`);
});