import { api } from "../../../api/axios";
import { useNavigate } from "react-router-dom";

export function CreateNote() {
  const navigate = useNavigate();

  async function handlerForm(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.title || !data.content) {
      return alert("Por favor, preencha o título e o conteúdo.");
    }

    try {
      const token = localStorage.getItem("@NoteSlate:token");
      await api.post(`/note`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });

      navigate("/workspace");
    } catch (err) {
      console.log("Erro ao salvar nota:", err);
      alert("Erro ao salvar a nota. Tente novamente.");
    }
  }

  return (
    <main className="min-h-screen bg-white md:bg-slate-50 p-4 md:p-10 flex justify-center">
      <form 
        onSubmit={handlerForm} 
        className="flex flex-col w-full max-w-3xl bg-white md:rounded-3xl md:shadow-sm md:border md:border-slate-200 overflow-hidden"
      >
        <div className="flex items-center justify-end gap-3 p-4 border-b border-slate-100 bg-white">
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className="text-slate-400 hover:text-slate-600 font-medium transition-colors"
          >
            ← Voltar
          </button>
          
          <button 
            type="submit" 
            className="bg-slate-900 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95"
          >
            Salvar
          </button>
        </div>

        {/* ÁREA DE ESCRITA */}
        <div className="flex flex-col flex-1 p-4 md:p-8 gap-4">
          <input
            name="title"
            type="text"
            placeholder="Título sem nome"
            className="text-4xl md:text-5xl font-black outline-none text-slate-900 placeholder:text-slate-200 w-full"
            autoFocus
          />

          <textarea
            name="content"
            placeholder="Comece a escrever sua ideia..."
            className="flex-1 w-full text-lg md:text-xl text-slate-600 outline-none resize-none leading-relaxed placeholder:text-slate-300 min-h-[500px]"
          />
        </div>
      </form>
    </main>
  );
}