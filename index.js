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

//

// Simulate typewriter effect (if you're using this approach)
const text = 'You can download my CV by clicking the button below:'
let index = 0
const speed = 100 // Speed of typing
const heading = document.getElementById('typeText')

function typeWriter() {
  if (index < text.length) {
    heading.textContent += text.charAt(index)
    index++
    setTimeout(typeWriter, speed)
  } else {
    // Once typing finishes, hide the blinking cursor
    heading.classList.add('BlinkHidden')
  }
}

// Start the typing animation
typeWriter()
