import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

import cors from "cors"
import { route } from "./router.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use(route)

//DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro MongoDB:", err.message))

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3002
  app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`))
}
export default app
