import NegociacaoController from './controller/NegociacaoController.js'

const controller = NegociacaoController.create()

document
  .querySelector('.form')
  .addEventListener('submit', (event) =>
    controller.adiciona(event)
  )
