const categoryList = []
let showAllTag
let selectionButtons
document.addEventListener("DOMContentLoaded", () => {
  showAllTag = document.querySelector(".tag-button--all")
  selectionButtons = document.querySelectorAll(".tag-button-4")

  showAllTag.addEventListener("click", show_all)
  showAllTag.querySelector(".tag-button__count").innerHTML = document.querySelectorAll(".layout__publications li").length - 7 // very naive should fix this later
  selectionButtons.forEach(button => {
    const buttonData = button.getAttribute("data-encode")
    button.addEventListener("click", e => {
      showCategory(buttonData)
    })
    categoryList.push(buttonData)
    button.querySelector(".tag-button__count").innerHTML = countItems(buttonData)
  })
})

const countItems = category => {
  const h2Element = document.getElementById(category);
  const liElement = h2Element.nextElementSibling.firstElementChild
  if (!h2Element) return; // return if h2 element doesn't exist

  // get all sibling elements after the h2 element
  let nextSibling = liElement.nextElementSibling;
  let total = 1
  while (nextSibling) {
    if (nextSibling.tagName === 'H2') break;
    nextSibling = nextSibling.nextElementSibling;
    total = total + 1
  }
  return total
}

const show_all = () => {
  categoryList.forEach(category => {
    showContent(category)
  })
  selectionButtons.forEach(button => {
    button.classList.remove("active")
  })
  showAllTag.classList.add("active")
}

const showCategory = categoryToShow => {
  categoryList.forEach(category => {
    category == categoryToShow ? showContent(category) : hideContent(category)
  })
  selectionButtons.forEach(button => {
    button.getAttribute("data-encode") == categoryToShow ? button.classList.add("active") : button.classList.remove("active")
  })
  showAllTag.classList.remove("active")
}

function hideContent(h2Id) {
  const h2Element = document.getElementById(h2Id);
  if (!h2Element) return; // return if h2 element doesn't exist

  // get all sibling elements after the h2 element
  const siblingElements = [h2Element];
  let nextSibling = h2Element.nextElementSibling;
  while (nextSibling) {
    if (nextSibling.tagName === 'H2') break;
    siblingElements.push(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
  }

  // hide all sibling elements
  siblingElements.forEach(element => {
    element.style.display = 'none';
  });
}

function showContent(h2Id) {
  const h2Element = document.getElementById(h2Id);
  if (!h2Element) return; // return if h2 element doesn't exist

  // get all sibling elements after the h2 element
  const siblingElements = [h2Element];
  let nextSibling = h2Element.nextElementSibling;
  while (nextSibling) {
    if (nextSibling.tagName === 'H2') break;
    siblingElements.push(nextSibling);
    nextSibling = nextSibling.nextElementSibling;
  }

  // show all sibling elements
  siblingElements.forEach(element => {
    element.style.display = '';
  });
}
