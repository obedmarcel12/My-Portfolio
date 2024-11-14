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
//
//
document.addEventListener('DOMContentLoaded', function () {
  const text = "I'm a Frontend Developer"
  const speed = 70 // Adjust speed of typing here (milliseconds)
  let i = 0
  const typewriter = document.getElementById('typewriter')

  function typeText() {
    if (i < text.length) {
      typewriter.innerHTML += text.charAt(i)
      i++
      setTimeout(typeText, speed)
    } else {
      // Once typing is done, hide the blinking cursor
      setTimeout(() => {
        typewriter.classList.add('hideBlink') // Apply the class to hide the cursor
      }, 500) // Delay slightly after finishing typing before hiding the cursor
    }
  }

  typeText()
})
