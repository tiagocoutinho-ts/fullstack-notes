import { useState } from "react";
import { api } from "../../../api/axios";

export function WorkSpace() {
  const [modal, setModal] = useState(false)

  // async function handlerForm(e) {
  //   e.preventDefault()

  //   try {
  //     const formData = new FormData(e.target)
  //     const userData = Object.fromEntries(formData);

  //     // const { data } = await api.post(`/note/${}`, userData)

  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 md:py-12">
        {!modal && (
          <button
            onClick={() => setModal(true)}
            className="fixed bottom-10 right-10 z-40 flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-full shadow-2xl shadow-slate-400 hover:scale-105 transition-all group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span className="font-bold text-lg">Nova Nota</span>
          </button>
        )}

        {modal && <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm p-4">
          <form className="flex flex-col gap-4 max-w-lg mx-auto p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
            <input
              type="text"
              placeholder="Título da nota"
              className="text-2xl font-bold outline-none text-slate-900 placeholder:text-slate-300"
            />
            <textarea
              placeholder="Comece a escrever..."
              className="min-h-[200px] resize-none outline-none text-slate-600 leading-relaxed"
              
            />
            <div className="flex gap-3 w-full mt-4">

              <button
                type="button"
                onClick={() => setModal(!modal)}
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
        </div>}

      </div>
    </main>
  )
}