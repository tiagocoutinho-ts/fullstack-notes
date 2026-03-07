import { Link } from "react-router-dom";
import IconNote from "/icon.png"

export function NavBar() {
  return (
    <Link to={"/"} className="hover:opacity-90 transition-opacity">
      <div className="flex items-center gap-2">
        <img className="w-9 h-9 object-contain" src={IconNote} alt="icon-note-slate" />
        
        <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tighter hidden min-[450px]:block">
          NoteSlate
        </span>
      </div>
    </Link>
  )
}