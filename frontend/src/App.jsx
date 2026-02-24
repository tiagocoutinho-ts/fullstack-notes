import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SingUp"
import { SignIn } from "./pages/SignIn"
import { LandingPage } from "./pages/LandingPage"
import { ProtectedRoute } from "./middleware/ProtectedRoute"
import { WorkSpace } from "./pages/WorkSpace"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create-your-account" element={<SignUp />} />
        <Route
          path="/workspace"
          element={
            <ProtectedRoute>
              <WorkSpace />
            </ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
