import { useEffect } from "react";

export function SignIn() {

  useEffect(() => {
    document.title = `Acesse sua conta`;
  })

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 text-center">Entrar</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="exemplo@email.com"
            className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Senha</label>
          <input
            type="password"
            name="password"
            placeholder="Sua senha"
            className="px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98]">
          Entrar
        </button>
      </form>
    </div>
  )
}