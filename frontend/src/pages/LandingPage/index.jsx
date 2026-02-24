import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/NavBar";

export function LandingPage() {

  useEffect(() => {
    document.title = `NoteSlate`;
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
      <NavBar />
        <div className="space-x-4">
          <Link to={"/login"} className="text-slate-600 font-medium hover:text-slate-900 transition-colors">Entrar</Link>
          <Link to={"/create-your-account"} className="bg-slate-600 hover:bg-slate-700 text-white px-5 py-2 rounded-full font-medium transition-all shadow-md shadow-slate-200">
            Criar conta grátis
          </Link>
        </div>
      </nav>

      <header className="container mx-auto px-6 py-16 md:py-24 text-center">
        <span className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
          Simples. Minimalista. Seu.
        </span>
        <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
          Suas ideias merecem um <br />
          <span className="text-slate-600">lugar organizado.</span>
        </h1>
        <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
          O NoteSlate ajuda você a capturar pensamentos, organizar tarefas e manter sua rotina produtiva sem distrações. Perfeito para o seu dia a dia.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link to={"/create-your-account"} className="bg-slate-600 hover:bg-slate-700 text-white text-lg px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl shadow-slate-200">
            Começar agora — É grátis
          </Link>
        </div>
      </header>

      <footer className="border-t border-slate-100 py-12 text-center text-slate-400 text-sm">
        &copy; 2026 NoteSlate. Desenvolvido para alta performance.
      </footer>
    </div>
  )
}