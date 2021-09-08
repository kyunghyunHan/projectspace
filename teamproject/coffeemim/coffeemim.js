const $coffee_name = document.querySelector(".coffee_name");
const $coffee_filling = document.querySelector(".filling");
const $coffeeItem = document.querySelectorAll(".coffeeItem");
// const coffeePlanetText = document.querySelectorAll(".coffeePlanetText");
let current_element = null;

const changeCoffeeType = (selected) => {
    if (current_element) {
        current_element.classList.remove("selected");
        $coffee_filling.classList.remove(current_element.id);
    }
    current_element = selected;
    $coffee_filling.classList.add(current_element.id);
    current_element.classList.add("selected");
    // console.log(selected);
    // coffee_name.innerText = selected.innerText;
};

const setActiveType = (element) => {
    element.toggleClass("selected");
};

[...$coffeeItem].forEach((li) => {
    li.addEventListener("mouseenter", () => {
        changeCoffeeType(li);
    });
});
