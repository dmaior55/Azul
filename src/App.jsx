import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Usuarios from './pages/Usuarios'
import Listagem from './pages/Listagem'

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <Link to="/">Início</Link>
        <Link to="/usuarios">Cadastro</Link>
        <Link to="/listagem">Passageiros</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
