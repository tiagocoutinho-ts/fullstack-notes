// create, list, show, update, delete

import Note from "../models/Note.js"

export async function create(req, res) {
  try {
    const { title, content } = req.body

    const userId = req.user

    if (!title || !content) {
      res.json({
        sucess: false,
        message: "Title and content are required."
      })
    }

    const note = Note.create({ title, content, userId })
    return res.status(201).json({
      success: true,
      note
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Error creating note."
    })
  }
}