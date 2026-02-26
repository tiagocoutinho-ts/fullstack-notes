export function ButtonCreateNote({ setModal }) {
  return (
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
  )
}

