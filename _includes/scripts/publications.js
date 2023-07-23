function hasArticleContainerAfterH2(h2Element) {
    // Get the parent of the h2Element
    let parent = h2Element.parentElement;

    // Get all children of the parent
    let children = Array.from(parent.children);

    // Get the index of the h2Element in the children array
    let h2Index = children.indexOf(h2Element);

    // Iterate from the h2Element to the next h2 or the end of the parent
    for (let i = h2Index + 1; i < children.length; i++) {
        let child = children[i];

        // If we find another h2, we stop looking
        if (child.tagName.toLowerCase() === 'h2') {
            return false;
        }

        // If the child is a div, has the class 'article-container' and the display style is 'block', return true
        if (
            child.tagName.toLowerCase() === 'div' &&
            child.classList.contains('article-container') &&
            child.style.display === 'block'
        ) {
            return true;
        }
    }

    // If we reached this point, no div with the class 'article-container' and display style 'block' was found
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a.box").forEach(box => {
    const filterTitle = box.getAttribute("href")
    box.addEventListener("click", e => {
      e.preventDefault()
      document.querySelectorAll("div.article-container").forEach(div => {
        if (div.getAttribute("data-encode-topic") == filterTitle) {
          div.style.display = "block";
        } else {
          div.style.display = "none"
        }
      })
      document.querySelectorAll("h2.section-header").forEach(h2 => {
        const hasContent = hasArticleContainerAfterH2(h2)
        if (hasContent) {
          h2.style.display = "block"
        } else {
          h2.style.display = "none"
        }
      })
    })
  })
  document.querySelector("#show-all").addEventListener("click", e => {
    e.preventDefault()
    document.querySelectorAll("div.article-container").forEach(div => {
      div.style.display = "block"
    })
    document.querySelectorAll("h2.section-header").forEach(h2 => {
      h2.style.display = "block"
    })
  })
})


