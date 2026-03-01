import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { SignUp } from "./pages/SingUp"
import { SignIn } from "./pages/SignIn"
import { LandingPage } from "./pages/LandingPage"
import { ProtectedRoute } from "./middleware/ProtectedRoute"
import { WorkSpace } from "./pages/WorkSpace"
import { CreateNote } from "./pages/CreateNote"
import { EditNote } from "./pages/EditNote"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-your-account" element={<SignUp />} />
        <Route path="/workspace"
          element={
            <ProtectedRoute>
              <WorkSpace />
            </ProtectedRoute>}
        />
        <Route path="/create-note"
          element={
            <ProtectedRoute>
              <CreateNote />
            </ProtectedRoute>}
        />
        <Route path="/edit-note/:id"
          element={
            <ProtectedRoute>
              <EditNote />
            </ProtectedRoute>}
        />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
