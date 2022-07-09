class Negociacao {
  _data
  _quantidade
  _valor

  get data () {
    return new Date(this._data.getTime())
  }

  get quantidade () {
    return this._quantidade ??= 0
  }

  get valor () {
    return this._valor ??= 0
  }

  get volume () {
    return this.quantidade * this.valor
  }

  constructor (_data, _quantidade, _valor) {
    Object.assign(this, { _quantidade, _valor })
    this._data = new Date(_data.getTime())
    Object.freeze(this)
    console.log(this)
  }

  static create (data, quantidade, valor) {
    return new Negociacao(
      data,
      quantidade,
      valor
    )
  }
}