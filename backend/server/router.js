import express from "express"
export const route = express.Router()

route.post("/create-your-account", (req, res) => {
  res.status(201).json({sucess: req.body})
})
