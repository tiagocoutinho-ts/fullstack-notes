import { useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import { api } from "../../../api/axios";
import { useNavigate } from "react-router-dom";

export function SignIn() {

  const navigate = useNavigate()

  useEffect(() => {
    document.title = `Acesse sua conta`;
  }, [])

  async function handlerForm(e) {
    e.preventDefault()
    
    try {
      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData);
      const { data } = await api.post("/login", userData)
      localStorage.setItem("@NoteSlate:token", data.token)
      navigate("/workspace")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen container mx-auto px-6 py-6">
      <NavBar />
      <div className="max-w-md mx-auto mt-10 p-8 bg-white">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Entrar</h1>
        <form onSubmit={handlerForm} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemplo@email.com"
              className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Sua senha"
              className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-transparent transition-all"
            />
          </div>

          <button type="submit" className="mt-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98]">
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-500">
          Não tem uma conta? <a href="/create-your-account" className="text-slate-600 font-bold hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  )
}