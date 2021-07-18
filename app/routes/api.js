import { Router } from "express";
import db from "../db/service.js";

const router = new Router();

// GET "/api/notes" responds with all notes from the database
router.get("/notes", async (req, res) => {
  const notes = await db.index();
  res.status(200).json(notes);
});

router.post("/notes", ({ body }, res) => {
  db.create(body);
  res.status(201).send("added 🎵 note");
});

// DELETE "/api/notes" deletes the note with an id equal to req.params.id
router.delete("/notes/:id", (req, res) => {});

export default router;
