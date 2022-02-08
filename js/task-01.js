
const listEll = document.querySelectorAll(".item");
console.log(`Number of categories: ${listEll.length}`);

listEll.forEach(list => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(`Element: ${list.lastElementChild.children.length}`);
});