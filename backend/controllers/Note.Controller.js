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

export async function showOneNote(req, res) {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ sucess: false, message: "ID is required." })
    }

    const note = await Note.findById(id)
    return res.json({ sucess: true, message: note })
  } catch (err) {

  }
}

export async function showAllNotes(req, res) {
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

export async function update(req, res) {
  try {
    const { id, title, content } = req.body
    if (!id || !title || !content) {
      return res.json({
        sucess: false,
        message: "Id, title and content are required."
      })
    }

    const updateNote = await Note.updateOne({ _id: id }, { $set: { title, content } })
    return res.json({ message: "Note updated successfully!" })
  } catch (err) {
    return res.status(500).json({ error: "Error updating." })
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params
    const result = await Note.deleteOne({ _id: id })

    if (result.deletedCount === 0) {
      res.status(404).json({ sucess: false, message: "Note not found." })
    }

    res.status(200).json({ sucess: true, message: "Note successfully deleted!" })
  } catch (err) {
    res.status(500).json({ sucess: false, message: "Error deleting", error: err.message })
  }
}
