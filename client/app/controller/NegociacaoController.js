import $ from './shortcut.js'
import Negociacao from '../domain/negociacao/Negociacao.js'
class NegociacaoController {
  #data
  #quantidade
  #valor
  #negociacao

  get data () {
    return this.#data
  }

  get quantidade () {
    return this.#quantidade
  }

  get valor () {
    return this.#valor
  }

  constructor (data, quantidade, valor) {
    this.#data = data
    this.#quantidade = quantidade
    this.#valor = valor
  }

  adiciona (event) {
    event.preventDefault()

    this.#negociacao = Negociacao.create({
      data: this.#data.value.split('-'),
      quantidade: this.#quantidade.value,
      valor: this.#valor.value
    })
  }

  static create () {
    return new NegociacaoController(
      $('#data'),
      $('#quantidade'),
      $('#valor')
    )
  }
}

export default NegociacaoController
