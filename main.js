// Завдання 1

const categoryItems = document.querySelectorAll(".item")

console.log(`У списку ${categoryItems.length} категорії`);

categoryItems.forEach((item) => {
  let categoryTitle = item.querySelector("h2")
  
  let categoryElementCount = item.querySelectorAll("li")

  console.log(`Категорія: ${categoryTitle.textContent}`);

  console.log(`Кількість елементів: ${categoryElementCount.length}`);
})

// Завдання 2

const ingredients = document.querySelector("#ingredients");

const ingredientsList = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи'
];

ingredientsList.forEach((ingredient) => {
    let ingredientItem = document.createElement("li")
    ingredientItem.textContent = ingredient
    ingredients.append(ingredientItem)
})

// Завдання 3

const gallery = document.querySelector("#gallery")

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach((image) => {
    gallery.insertAdjacentHTML("beforeend", `<li><img style="width: 70px; height: 70px;" src="${image.url}" alt="${image.alt}"></li>`)
})

// Завдання 4

let valueSpan = document.querySelector("#value")

let counterValue = 0;

const incrementButton = document.querySelector('[data-action="increment"]')

const decrementButton = document.querySelector('[data-action="decrement"]')

function increment() {
    counterValue += 1;
    valueSpan.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
}

incrementButton.addEventListener("click", increment)

decrementButton.addEventListener("click", decrement)