import "dotenv/config"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

export async function login(req, res) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json(
      {
        sucess: false,
        message: "Email and password are required."
      })

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json(
        {
          sucess: false,
          message: "This email address is not registered."
        })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json(
        {
          success: false,
          message: "Incorrect email address or password."
        });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
    return res.status(200).json(
      {
        sucess: true,
        user_name: user.name,
        token,
        user_id: user._id
      })

  } catch (err) {
    res.status(500).json({ success: false, message: "Internal server error." })
  }
}

export async function createAccount(req, res) {
  const { name, email, password } = req.body
  if (!name || !email || !password) return res.status(400).json(
    {
      sucess: false,
      message: "Username, email and password are required."
    })

  const useExists = await User.findOne({ email })
  if (useExists) {
    return res.status(400).json({
      sucess: false,
      message: "This email address is already in use."
    })
  }

  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    })

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" })
    res.status(201).json(
      {
        sucess: true,
        message: "Account created successfully!",
        id: newUser._id,
        token
      })

  } catch (err) {
    res.status(500).json(
      {
        sucess: false,
        message: "Failed to create user account."
      })
  }
}

export async function validateToken(req, res) {
  const token = req.headers["authorization"].split(" ")[1]

  const decode = jwt.verify(token, process.env.JWT_SECRET)
  if (decode.id) {
    return res.status(200).json({ valid: true })
  } else {
    return res.status(400).json({ valid: false })
  }
}