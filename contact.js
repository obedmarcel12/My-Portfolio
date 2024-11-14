function Menu(e) {
  const list = document.querySelector('ul')

  if (e.name === 'menu') {
    e.name = 'close'
    list.classList.add('opacity-100')
    list.classList.add('top-[100px]')
  } else {
    e.name = 'menu'
    list.classList.remove('opacity-100')
    list.classList.remove('top-[100px]')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm')

  form.addEventListener('submit', function (event) {
    event.preventDefault()

    // Client-side validation
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.')
      return
    }

    // Submit form if validation passes
    this.submit()
  })
})
//

const click = document.getElementById('click')
click.addEventListener('click', () => {
  document.location.pathname = 'about.html'
})
