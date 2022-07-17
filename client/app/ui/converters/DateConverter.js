/**
 * Quando tmeos uma classe que todos os seus métodos são estáticos
 * logo, ela é uma classe estática!
 */

class DateConverter {
  constructor () {
    throw new Error('Essa classe não pode ser instânciada!')
  }

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
