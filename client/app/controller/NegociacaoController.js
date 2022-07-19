import $ from './shortcut.js'
import DateConverter from '../ui/converters/DateConverter.js'
import Negociacao from '../domain/negociacao/Negociacao.js'
import Negociacoes from '../domain/negociacao/Negociacoes.js'
class NegociacaoController {
  #data
  #negociacao
  #negociacoes
  #quantidade
  #valor

  get data () {
    return this.#data
  }

  get quantidade () {
    return this.#quantidade
  }

  get negociacao () {
    return this.#negociacao ??= ''
  }

  get negociacoes () {
    return this.#negociacoes ??= Negociacoes.create()
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
      data: DateConverter.paraData(this.#data.value),
      quantidade: parseInt(this.#quantidade.value),
      valor: parseFloat(this.#valor.value)
    })
    this.negociacoes.adiciona(this.negociacao)

    console.log(this.#negociacoes.paraArray())
    return this
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
