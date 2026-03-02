import { useEffect, useState } from "react";
import { api } from "../../../api/axios";
import { useNavigate, useParams } from "react-router-dom";

export function EditNote() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const navigate = useNavigate();
  const { id } = useParams()

  useEffect(() => {
    async function showNote() {
      try {
        const token = localStorage.getItem("@NoteSlate:token")
        const { data } = await api.get(`/note/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (data.sucess) {
          setTitle(data.message.title)
          setContent(data.message.content)
        }
        console.log(data)
        console.log(note)
        document.title = `NoteSlate | Editar`;
      } catch (err) {
        console.log(err)
      }
    }
    showNote()
  }, [id])

  async function handlerForm(e) {
    e.preventDefault();

    if (!title || !content) {
      return alert("Por favor, preencha o título e o conteúdo.");
    }

    try {
      const token = localStorage.getItem("@NoteSlate:token");
      await api.put(`/note/`, {
        id,
        title,
        content
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      navigate("/workspace");
    } catch (err) {
      console.log("Erro ao salvar nota:", err);
      alert("Erro ao editar a nota. Tente novamente.");
    }
  }

  async function handlerDeleteNote() {

    const confirmDelete = confirm("Tem certeza que deseja exluir essa nota?")

    if(!confirmDelete) {
      return
    }

    try {
      const token = localStorage.getItem("@NoteSlate:token");
      await api.delete(`/note/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      navigate("/workspace");
    } catch (err) {
      console.log("Erro ao deletar nota:", err);
      alert("Erro ao deletar a nota. Tente novamente.");
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
            onClick={handlerDeleteNote}
            type="submit"
            className="bg-red-600 text-white px-8 py-2.5 rounded-xl font-bold hover:bg-red-800 transition-all shadow-md active:scale-95"
          >
            Excluir
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
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Título sem nome"
            className="text-4xl md:text-5xl font-black outline-none text-slate-900 placeholder:text-slate-200 w-full"
            autoFocus
          />

          <textarea
            name="content"
            value={content || ""}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Comece a escrever sua ideia..."
            className="flex-1 w-full text-lg md:text-xl text-slate-600 outline-none resize-none leading-relaxed placeholder:text-slate-300 min-h-[500px]"
          />
        </div>
      </form>
    </main>
  );
}