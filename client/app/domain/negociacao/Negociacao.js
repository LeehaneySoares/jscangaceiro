class Negociacao {
  #data
  #quantidade
  #valor

  get quantidade () {
    return this.#quantidade ??= 0
  }

  get valor () {
    return this.#valor ??= 0
  }

  constructor (descriptor) {
    this.#data = descriptor.data
    this.#quantidade = descriptor.quantidade
    this.#valor = descriptor.valor
  }

  obtemVolume () {
    return this.quantidade * this.valor
  }

  static create (descriptor) {
    return new Negociacao(descriptor)
  }
}