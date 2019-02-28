console.log("Linked main.js")

/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
// const sectionEl = document.querySelector(".article__section")
// console.log(sectionEl)

const footerEl = document.querySelector(".article__footer")
console.log(footerEl)

const smallTextEl = document.querySelector(".smallText");
console.log("before", smallTextEl);
smallTextEl.classList.remove("smallText");
smallTextEl.classList.add("largeText");
console.log("after", smallTextEl)

smallTextEl.textContent = "Welcome to the Josh Hibray Blog"

/*
    This code will return all section components
*/
const sectionEl = document.querySelectorAll("section")
console.log("all elements with class article__section", sectionEl)

for(let i = 0; i < sectionEl.length; i++) {
  sectionEl[i].classList.add("new__class");
}

const headerAll = document.querySelectorAll(".article__header")

for(let i = 0; i < headerAll.length; i++) {
    headerAll[i].classList.add("important");
}

const textDash = document.querySelector(".dashed")
/*document.querySelector(".dashed").classList.remove("dashed")*/
textDash.classList.remove("dashed")

footerEl.classList.add("goldenrod")

