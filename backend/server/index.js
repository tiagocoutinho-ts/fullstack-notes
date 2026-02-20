import express from "express"
import cors from "cors"
import { route } from "./router.js"
const app = express()
const PORT = 3002

app.use(express.json())
app.use(cors())
app.use(route)

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))