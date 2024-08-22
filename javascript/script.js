// Array of blog post URLs or IDs
const posts = [
  'blog/te-houtaewa-template.html',
  'blog/identity-values.html',
  'blog/html_css.html',
  'blog/learning-plan.html',
  'blog/emotional-intelligence.html',
  'blog/javascript-dom.html',
  'blog/neuroplasticity.html',
  'blog/te-whare-tapa-wha.html',
  'blog/problem-solving.html',
  'blog/foundations-reflection.html',
  // Add more post URLs or IDs here
]

// Get the current post index based on the URL
const currentIndex = posts.indexOf(window.location.pathname.split('/').pop())

function navigate(direction) {
  // Calculate the new index
  const newIndex = currentIndex + direction

  // Check if the new index is within bounds
  if (newIndex >= 0 && newIndex < posts.length) {
    // Redirect to the new post
    window.location.href = posts[newIndex]
  }
}

// Update button visibility based on current index
function updateButtonVisibility() {
  const prevButton = document.getElementById('prev-button')
  const nextButton = document.getElementById('next-button')

  prevButton.style.display = currentIndex === 0 ? 'none' : 'inline'
  nextButton.style.display =
    currentIndex === posts.length - 1 ? 'none' : 'inline'
}

// Call this function to set up initial button state
updateButtonVisibility()
