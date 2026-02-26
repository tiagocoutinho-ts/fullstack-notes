import { api } from "../../../api/axios";

export function FormCreateNote({ setModal }) {

  async function handlerForm(e) {
    e.preventDefault()

    try {
      const formData = new FormData(e.target)
      const userData = Object.fromEntries(formData);

      if(!userData.title || !userData.content) {
        return alert("preencha os campos")
      }

      const token = localStorage.getItem("@NoteSlate:token")
      const { data } = await api.post(`/note`, userData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setModal(false)

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm p-4">
      <form onSubmit={handlerForm} className="flex flex-col gap-4 max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
        <input
          type="text"
          name="title"
          placeholder="Título da nota"
          className="text-2xl font-bold outline-none text-slate-900 placeholder:text-slate-300"
        />
        <textarea
          name="content"
          placeholder="Comece a escrever..."
          className="min-h-[200px] resize-none outline-none text-slate-600 leading-relaxed"

        />
        <div className="flex gap-3 w-full mt-4">

          <button
            type="button"
            onClick={() => setModal(false)}
            className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-2xl font-semibold hover:bg-slate-200 transition-all border border-slate-200"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="flex-[2] bg-slate-900 text-white py-3 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Salvar Nota
          </button>

        </div>
      </form>
    </div>
  )
}