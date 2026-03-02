import { useEffect, useState } from "react";
import { ButtonCreateNote } from "../../components/ButtonCreateNote";
import { api } from "../../../api/axios";
import { NotesGrid } from "../../components/NotesGrid";
import { SkeletonCard } from "../../components/SkeletonCard";
import { useNavigate } from "react-router-dom";

export function WorkSpace() {
  const navigate = useNavigate()

  const [notes, setNotes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getAllNotes() {

      if (!token) {
        navigate("/");
        return;
      }

      try {
        setIsLoading(true)
        const token = localStorage.getItem("@NoteSlate:token")
        const { data } = await api.get("/note", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (data.success) {
          setNotes(data.notes)
        }
        console.log(notes)
        document.title = `NoteSlate | WorkSpace`;
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    getAllNotes()
  }, [])


  function handlerLogout() {
    const confirmLogOut = confirm("Você confirma que deseja sair da sua conta?")
    if(!confirmLogOut) {
      return
    }

    localStorage.removeItem("@NoteSlate:token")
    setNotes([])
    navigate("/", { replace: true })
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 md:py-12">
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-800">Notes</h1>
            {notes.length > 0 &&
              <span className="bg-slate-200 text-slate-600 text-xs font-bold px-2.5 py-0.5 rounded-full">
                {notes.length}
              </span>
            }
          </div>
          <button
          onClick={handlerLogout} 
          className="bg-slate-600 text-white px-8 py-2 rounded-4xl font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95">Sair</button>
        </div>

        <ButtonCreateNote />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {isLoading ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : notes.map((note, i) => (
              <NotesGrid
                key={i}
                id={note._id}
                title={note.title}
                content={note.content}
              />
            ))
          }
        </div>

      </div>
    </main>
  )
}

