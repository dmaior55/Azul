import './Usuarios.css'

function Usuarios() {
  return (
    <main className="users-page">
      <div className="card">
        <h1>Cadastro Azul</h1>
        <input type="text" className="form-input" placeholder="Nome" />
        <input type="email" className="form-input" placeholder="Email" />
        <input type="password" className="form-input" placeholder="Senha" />
        <input type="password" className="form-input" placeholder="Confirme sua senha" />
        <button className="submit-button">Criar conta</button>
      </div>
    </main>
  )
}

export default Usuarios
