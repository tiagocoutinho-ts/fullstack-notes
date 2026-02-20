import {BrowserRouter, Routes, Route} from "react-router-dom"
import { SignUp } from "./pages/SingUp"
import { SignIn } from "./pages/SignIn"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/create-your-account" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
