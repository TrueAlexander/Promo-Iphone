const accordeon = () => {
  const chItems = document.querySelectorAll('.characteristics__item')
  const chContents = document.querySelectorAll('.characteristics__description')
  const chButtons = document.querySelectorAll('.characteristics__title')

  chItems.forEach(item => {
    const chButton = item.querySelector('.characteristics__title')
    const chContent = item.querySelector('.characteristics__description')

    chButton.addEventListener('click', () => {

      chContents.forEach((item) => {
        item.style.height = ''
      })

      chButtons.forEach((button) => {
        button.classList.remove('active')
      })

      if (chContent.classList.contains('open')) {
        chContent.style.height = ''
      } else {
        chContent.style.height = chContent.scrollHeight + 'px'
        chButton.classList.add('active')
      }
      chContent.classList.toggle('open')

    })
  })


}

accordeon()