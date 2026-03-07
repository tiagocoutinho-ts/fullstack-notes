import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { route } from "./router.js"

const app = express()

app.use(cors()) 
app.use(express.json())

// 2. FUNÇÃO DE CONEXÃO REUTILIZÁVEL (Padrão Serverless)
const connectDB = async () => {
  // Se já estiver conectado, não faz nada
  if (mongoose.connection.readyState >= 1) return;
  
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Conectado ao MongoDB");
  } catch (err) {
    console.error("Erro MongoDB:", err.message);
  }
};

// 3. MIDDLEWARE DE CONEXÃO
// Isso garante que o banco conecte ANTES de qualquer rota rodar na Vercel
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(route)

// 4. EXECUÇÃO LOCAL
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3002
  app.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`))
}

export default app