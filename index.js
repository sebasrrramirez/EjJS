const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

//Traigo los elementos
const input = document.querySelector("#Input");
const button = document.querySelector("#button");
const container = document.querySelector(".pizza");

//funcion para guardar en LS
// const saveLocalStorage = () => {
//   localStorage.setItem("pizza", JSON.stringify(pizzaEncontrada));
// };

// probar si puedo usar la funcion
// const createPizza = (pizzaEncontrada) => {
//   return `<div class="card">
//   <h2>-${pizzaEncontrada.nombre}</h2>
//   <p>ID ${pizzaEncontrada.id}</p>
//   <p>Ingredientes: ${pizzaEncontrada.ingredientes}</p>
//   <p>Precio $ ${pizzaEncontrada.precio}</p>
//   <img src="${pizzaEncontrada.imagen}" alt="" srcset="">
//   </div>`;
// };

// 4. render aca me esta devolviendo todo el array sin filtrar !!!!!
// const renderPizzas = () => {
//   container.innerHTML = pizzaEncontrada
//     .map((pizza) => createPizza(pizza))
//     .join("");
// };

// funcion HORRIBLE para buscar la maldita pizza, que funciona
const buscarPizza = () => {
  if (!input.value.length) {
    const idVacio = `<small id="error">Ingrese una pizza</small>`;
    container.innerHTML = idVacio;
  }
  const idPizza = Number(input.value);
  console.log(idPizza); // Convertir a número
  if (idPizza >= 6) {
    const idMayor = `<small id="error">Pizza no encontrada</small>`;
    container.innerHTML = idMayor;
  } else {
    const pizzaEncontrada = pizzas.find((pizza) => pizza.id === idPizza);
    const resultadoPizza = `<div class="card">
  <h2>-${pizzaEncontrada.nombre}</h2>
  <p>ID ${pizzaEncontrada.id}</p>
  <p>Ingredientes: ${pizzaEncontrada.ingredientes}</p>
  <p>Precio $ ${pizzaEncontrada.precio}</p>
  <img src="${pizzaEncontrada.imagen}" alt="" srcset="">
  </div>`;
    container.innerHTML = resultadoPizza;
    localStorage.setItem("pizza", JSON.stringify(pizzaEncontrada));
  }
};

const init = () => {
  button.addEventListener("click", buscarPizza);
};

init();
