import { pool } from "../config/db.js";

export async function getSermons(req, res) {
  const [rows] = await pool.query(
    "SELECT * FROM sermons ORDER BY created_at DESC"
  );
  res.json(rows);
}

export async function getEvents(req, res) {
  const [rows] = await pool.query(
    "SELECT * FROM events ORDER BY event_date ASC"
  );
  res.json(rows);
}

export async function createMessage(req, res) {
  const { name, email, body } = req.body;

  if (!name || !email || !body) {
    return res.status(400).json({ message: "All fields are required" });
  }

  await pool.query(
    "INSERT INTO messages (name, email, body) VALUES (?, ?, ?)",
    [name, email, body]
  );

  res.status(201).json({ message: "Message received" });
}