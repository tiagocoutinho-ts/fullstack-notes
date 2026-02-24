import { Link } from "react-router-dom";
import IconNote from "/icon.png"

export function NavBar() {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2">
        <img className="w-8" src={IconNote} alt="icon-note-slate" />
        <span className="text-2xl font-bold text-slate-800 tracking-tight">NoteSlate</span>
      </div>
    </Link>
  )
}