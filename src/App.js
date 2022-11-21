import "./styles/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import LoginPage from "./pages/login"
import SignUpPage from "./pages/signup"
import Employees from "./pages/employees"
import PageNotFound from "./pages/NotFound"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/employees" element={<Employees />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
