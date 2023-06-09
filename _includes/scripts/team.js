document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.read-more").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault()
      const name = a.getAttribute("data-encode")
      if (a.innerHTML == "Read More") {
        a.innerHTML = "Show Less"
      } else {
        a.innerHTML = "Read More"
      }
      document.querySelectorAll("div.member-bio").forEach(div => {
        if (div.getAttribute("data-encode") == name) {
          toggleOpened(div)
        }
      })
    })
  })
})

const toggleOpened = div => {
  if (div.className.includes("active")) {
    div.classList.remove("active")
  } else {
    div.classList.add("active")
  }
}
