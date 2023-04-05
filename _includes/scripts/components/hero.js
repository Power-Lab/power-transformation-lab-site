const scrollToFirstContent = () => {
  const vh = window.innerHeight
  if (window.innerWidth < 500) {
    window.scrollTo(0, vh - 64)
  } else {
    window.scrollTo(0, vh - 80)
  }
}

const promptArrow = document.querySelector(".prompt-arrow")
promptArrow.addEventListener("keydown", e => {
  if (e.key == "Enter") {
    scrollToFirstContent()
  }
})
