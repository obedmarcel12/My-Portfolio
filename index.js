function Menu(e) {
  const list = document.querySelector('ul')

  if (e.name === 'menu') {
    e.name = 'close'
    list.classList.add('opacity-100')
    list.classList.add('top-[130px]')
  } else {
    e.name = 'menu'
    list.classList.remove('opacity-100')
    list.classList.remove('top-[130px]')
  }
}

const click = document.getElementById('click')
click.addEventListener('click', () => {
  document.location.pathname = 'about.html'
})
