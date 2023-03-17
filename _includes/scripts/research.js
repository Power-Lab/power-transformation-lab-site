document.querySelectorAll(".layout--research p img").forEach((element, index)=> {
  if (index % 2 == 0) {
    element.classList.add("right-align")
  }
})

sectionTitles = [...document.querySelectorAll("#lab-focus h2")].slice(-3)
boxes = [...document.querySelectorAll(".box")]

sectionTitles.forEach((h2, idx) => {
  boxes[idx].innerHTML = "<h3>" + h2.innerText + "</h3>"
  boxes[idx].href = "#" + h2.id
})
