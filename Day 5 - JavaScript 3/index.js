// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
  let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return vysledek;
}



window.addEventListener('load', function () {

  let randomNumber = nahodneCislo(0, 100)
  console.log(randomNumber)

  let submitButton = document.querySelector('#submit-button')
  let numberInput = document.querySelector('#number-input')
  let message = document.querySelector('#message')
  let playAgainButton = document.querySelector('#play-again-button')

  playAgainButton.addEventListener('click', function () {
    document.location.reload()
  })

  submitButton.addEventListener('click', function () {
    let guessedNumber = Number(numberInput.value)

    if (guessedNumber < randomNumber) {
      message.innerHTML = 'Myslím si větší číslo.'
    } else if (guessedNumber > randomNumber) {
      message.innerHTML = 'Myslím si menší číslo.'
    } else if (guessedNumber === randomNumber) {
      message.innerHTML = 'Gratulujem!'
      playAgainButton.style.display = 'inline'
      submitButton.style.display = 'none'
    } else {
      message.innerHTML = 'Do formularu si napisal uplnu blbost!'
    }

  })

})
