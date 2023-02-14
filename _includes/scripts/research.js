document.querySelectorAll(".layout--research p img").forEach((element, index)=> {
  if (index % 2 == 0) {
    element.classList.add("right-align")
  }
})

