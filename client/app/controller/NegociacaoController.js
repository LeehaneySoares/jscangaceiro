class NegociacaoController {
  adiciona (event) {
    event.preventDefault()
    alert('Chamei ação no controller')
  }

  static create () {
    return new NegociacaoController()
  }
}

export default NegociacaoController
