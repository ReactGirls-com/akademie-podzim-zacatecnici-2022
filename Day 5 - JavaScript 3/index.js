// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
  let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return vysledek;
}



window.addEventListener('load', function () {
  const maximalniPocetPokusu = 10

  let randomNumber = nahodneCislo(0, 100)
  console.log(randomNumber)

  let nejblizsiNizsiCislo = 0
  let nejblizsiVyssiCislo = 100
  let pocetPokusu = 0

  let submitButton = document.querySelector('#submit-button')
  let numberInput = document.querySelector('#number-input')
  let message = document.querySelector('#message')
  let playAgainButton = document.querySelector('#play-again-button')
  let leftNumber = document.querySelector('#left-number')
  let rightNumber = document.querySelector('#right-number')

  function showPlayAgainButton () {
    playAgainButton.style.display = 'inline'
    submitButton.style.display = 'none'
  }

  playAgainButton.addEventListener('click', function () {
    document.location.reload()
  })

  submitButton.addEventListener('click', function () {
    let guessedNumber = Number(numberInput.value)

    pocetPokusu = pocetPokusu + 1

    if (guessedNumber < randomNumber) {
      message.innerHTML = 'Myslím si větší číslo.'
      if (guessedNumber > nejblizsiNizsiCislo) {
        nejblizsiNizsiCislo = guessedNumber
        leftNumber.innerHTML = nejblizsiNizsiCislo
      }
    } else if (guessedNumber > randomNumber) {
      message.innerHTML = 'Myslím si menší číslo.'
      if (guessedNumber < nejblizsiVyssiCislo) {
        nejblizsiVyssiCislo = guessedNumber
        rightNumber.innerHTML = nejblizsiVyssiCislo
      }
    } else if (guessedNumber === randomNumber) {
      message.innerHTML = `Gratulujem! Uhodl jsi na ${pocetPokusu} pokusu.`
      showPlayAgainButton()
    } else {
      message.innerHTML = 'Do formularu si napisal uplnu blbost!'
    }

    if (pocetPokusu === maximalniPocetPokusu) {
      console.log('Koncis, parchante! Maximalni pocet pokusu je ' + maximalniPocetPokusu)
      showPlayAgainButton()
    }

    console.log('pokus cislo', pocetPokusu)

  })

})
