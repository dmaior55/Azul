import './Login.css'
import downloadImg from '../assets/dowload.jpg'

function Login() {
  return (
    <main className="container">
      <section className="left">
        <img src={downloadImg} alt="Azul Air" />
      </section>

      <section className="right">
        <div className="LoginAzul">
          <h1 className="logo">Azul Air</h1>
          <h2>Fazer login</h2>

          <label>Usuário</label>
          <input type="text" placeholder="Digite seu login..." />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha..." />

          <button>Entrar</button>
          <a href="#">Esqueci minha senha</a>
        </div>
      </section>
    </main>
  )
}

export default Login
