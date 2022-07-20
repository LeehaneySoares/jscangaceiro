import $ from './shortcut.js'
import DateConverter from '../ui/converters/DateConverter.js'
import Negociacao from '../domain/negociacao/Negociacao.js'
import Negociacoes from '../domain/negociacao/Negociacoes.js'
class NegociacaoController {
  #data
  #negociacoes
  #quantidade
  #valor

  get data () {
    return this.#data
  }

  get quantidade () {
    return this.#quantidade
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
    this.negociacoes.adiciona(this.#criaNegociacao())
    this.#limparForm()
    this.negociacoes.paraArray().length = 0
    console.log(this.negociacoes)
    return this
  }

  #criaNegociacao () {
    return Negociacao.create({
      data: DateConverter.paraData(this.#data.value),
      quantidade: parseInt(this.#quantidade.value),
      valor: parseFloat(this.#valor.value)
    })
  }

  #limparForm () {
    this.#data.value = ''
    this.#quantidade.value = 1
    this.#valor.value = 0.0
    this.#data.focus()
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
