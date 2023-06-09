document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.box").forEach(box => {
    const filterTitle = box.getAttribute("href")
    box.addEventListener("click", e => {
      e.preventDefault()
      document.querySelectorAll("div.article-container").forEach(div => {
        if (div.getAttribute("data-encode") == filterTitle) {
          div.style.display = "block";
        } else {
          div.style.display = "none"
        }
      })
    })
  })
  document.querySelector("#show-all").addEventListener("click", e => {
    e.preventDefault()
    document.querySelectorAll("div.article-container").forEach(div => {
      div.style.display = "block"
    })
  })
})
