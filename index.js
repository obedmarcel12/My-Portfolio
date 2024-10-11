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

document.addEventListener('DOMContentLoaded', function () {
  // Text for the typewriter effect
  const text = `I Create Websites,\n and I'm A Frontend Developer`

  const speed = 100 // Typing speed in milliseconds
  let i = 0 // Counter to track current character
  const typewriterHeading = document.getElementById('typewriter-heading')

  function typeText() {
    if (i < text.length) {
      // Handle line breaks (\n) and regular characters
      typewriterHeading.innerHTML +=
        text.charAt(i) === '\n' ? '<br/>' : text.charAt(i)
      i++
      setTimeout(typeText, speed) // Delay before typing the next character
    } else {
      // Once typing is done, hide the blinking cursor
      setTimeout(() => {
        typewriterHeading.classList.add('hideBlink') // Apply the class to hide the cursor
      }, 500) // Delay slightly after finishing typing before hiding the cursor
    }
  }

  typeText() // Start typing effect when the page loads
})
