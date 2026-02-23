import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <Link to={"/"}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-slate-600 rounded-lg"></div>
        <span className="text-2xl font-bold text-slate-800 tracking-tight">NoteSlate</span>
      </div>
    </Link>
  )
}