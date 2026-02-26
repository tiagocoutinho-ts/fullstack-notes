// create, list, show, update, delete

import Note from "../models/Note.js"

export async function create(req, res) {
  try {
    const { title, content } = req.body

    const userId = req.user

    if (!title || !content) {
      return res.json({
        sucess: false,
        message: "Title and content are required."
      })
    }

    const note = await Note.create({ title, content, userId })
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

export async function showNotes(req, res) {
  try {
    const userId = req.user

    const notes = await Note.find({ userId }).sort({ createdAt: -1 })

    return res.status(200).json({
      success: true,
      notes
    });
  } catch (err) {
    return res.status(500).json({
      success: true,
      message: "Error retrieving grades."
    });
  }
}