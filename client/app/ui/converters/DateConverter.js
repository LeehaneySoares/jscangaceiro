class DateConverter {
  static paraTexto (data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
  }

  static paraData (data) {
    return new Date(
      ...data
        .split('-')
        .map((item, index) => item - index % 2)
    )
  }

  static create () {
    return new DateConverter()
  }
}

export default DateConverter