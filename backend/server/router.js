import express from "express"
import * as AuthController from "../controllers/Auth.controller.js"
import * as NoteController from "../controllers/Note.Controller.js"
import { Authentication } from "../middleware/authentication.js"
export const route = express.Router()

route.post("/login", AuthController.login)
route.post("/create-your-account", AuthController.createAccount)
route.get("/validate-token", AuthController.validateToken)

route.post("/note", Authentication, NoteController.create) // Create a new note.
// route.get("/note/:id") // To search for a specific grade.
// route.put("/note/:id") // Edit the note's content.
// route.delete("/note/:id") // Remove the note permanently.