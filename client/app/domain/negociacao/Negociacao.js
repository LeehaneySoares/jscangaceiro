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
    this._data = new Date(_data)
    Object.freeze(this)
    console.log(this._data)
  }

  static create (descriptor) {
    return new Negociacao(
      descriptor?.data,
      descriptor?.quantidade,
      descriptor?.valor
    )
  }
}

export default Negociacao