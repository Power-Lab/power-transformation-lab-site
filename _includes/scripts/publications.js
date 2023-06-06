document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.box").forEach(box => {
    const filterTitle = box.getAttribute("href")
    console.log(filterTitle)
    box.addEventListener("click", e => {
      e.preventDefault()
      console.log(filterTitle)
    })
  })
})
