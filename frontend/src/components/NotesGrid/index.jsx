import { Link } from "react-router-dom"
import { ButtonSVG } from "../ButtonSVG"

export function NotesGrid({ id, title, content }) {


  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm 
      hover:shadow-md transition-all duration-200 flex flex-col gap-3 group relative">

      <Link to={`/edit-note/${id}`}>
        <ButtonSVG />
      </Link>
      <h2 className="font-bold text-slate-800 text-lg border-b border-slate-100 pb-2 pr-8">
        {title}
      </h2>

      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap italic">
        {content}
      </p>
    </div>
  )
}