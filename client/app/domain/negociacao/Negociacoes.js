class Negociacoes {
  #negociacoes

  get negociacoes () {
    return this.#negociacoes ??= []
  }

  adiciona (negociacao) {
    this.negociacoes.push(negociacao)
    return this
  }

  paraArray () {
    return [].concat(this.negociacoes)
  }
  
  static create () {
    return new Negociacoes()
  }
}

export default Negociacoes