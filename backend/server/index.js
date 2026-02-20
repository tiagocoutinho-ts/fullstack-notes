import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

import cors from "cors"
import { route } from "./router.js"
const app = express()
const PORT = 3002 

app.use(express.json())
app.use(cors())
app.use(route)

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT, () => console.log(`conectado ao MongoDB com sucesso! | app: http://localhost:${PORT}`))
}).catch((err) => {
  console.error("Erro ao conectar no MongoDB:", err.message)
})
