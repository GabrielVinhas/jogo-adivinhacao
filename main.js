// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const randomNumber = Math.round(Math.random() *10)
let xAttemps = 1

// Funções
function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão

  const numberInput = document.querySelector('#numberInput')

  if(Number(numberInput.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `Você acertou em ${xAttemps} tentativas`
  }
  numberInput.value = ""
  xAttemps++
}

function handleResetClick() {
  toggleScreen()
  xAttemps = 1
}

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)