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
const saveLocalStorage = () => {
  localStorage.setItem("pizzaGuardada", JSON.stringify(pizzaEncontrada));
};

//funcion Input vacio
const inputVacio = () => {
  const idVacio = `<small id="error">Ingrese una pizza</small>`;
  container.innerHTML = idVacio;
  return idVacio;
};

//funcion Input vacio
const PizzaNoEncontrada = () => {
  const idMayor = `<small id="error">Pizza no encontrada en stock</small>`;
  container.innerHTML = idMayor;
  return idMayor;
};

//funcion para renderizar y mostrar la pizza
const showPizzas = () => {
  idPizza = Number(input.value);
  const pizzaEncontrada = pizzas.find((pizza) => pizza.id === idPizza);
  const resultadoPizza = `<div class="card">
<h2>-${pizzaEncontrada.nombre}</h2>
<p>Ingredientes: ${pizzaEncontrada.ingredientes}</p>
<p>Precio $ ${pizzaEncontrada.precio}</p>
<img src="${pizzaEncontrada.imagen}" alt="" srcset="">
</div>`;
  container.innerHTML = resultadoPizza;
  return resultadoPizza;
};

// funcion para buscar la pizza, que funciona
const buscarPizza = () => {
  if (!input.value.length) {
    inputVacio();
  }
  const idPizza = Number(input.value);
  if (idPizza >= 6) {
    PizzaNoEncontrada();
  } else {
    showPizzas();
    localStorage.setItem("pizza", JSON.stringify(pizzaEncontrada));
  }
};

const init = () => {
  button.addEventListener("click", buscarPizza);
};

init();
