import './Listagem.css'

function Listagem() {
  return (
    <main className="listagem-page">
      <h1>Azul Air</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Destino</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Luiz</td>
            <td>São Paulo</td>
            <td>Embarcado</td>
            <td>📝 ✈️</td>
          </tr>
          <tr>
            <td>Isabella</td>
            <td>Rio de Janeiro</td>
            <td>Em conexão</td>
            <td>📝 ✈️</td>
          </tr>
          <tr>
            <td>Gaby</td>
            <td>Salvador</td>
            <td>Check-in</td>
            <td>📝 ✈️</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default Listagem
