import { useEffect, useState } from "react";
import { ButtonCreateNote } from "../../components/ButtonCreateNote";
import { FormCreateNote } from "../../components/FormCreateNote";
import { api } from "../../../api/axios";

export function WorkSpace() {
  const [modal, setModal] = useState(false)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    async function getAllNotes() {
      try {
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
      }
    }
    getAllNotes()
  }, [])


  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8 md:py-12">
        <h1 className="font-extrabold text-2xl">Notes</h1>
        {!modal && (
          <ButtonCreateNote
            setModal={setModal} />
        )}

        {modal && (
          <FormCreateNote
            setModal={setModal}
          />)}

        {notes.map((note, index) => (
          <div>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
          </div>
        ))}
        
      </div>
    </main>
  )
}

