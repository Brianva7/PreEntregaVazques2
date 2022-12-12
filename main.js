/*---------------------------------*/
/*------------ VARIABLES ------------*/

const productos = [
  { nombre: "hamburguesa", precio: 100 },
  { nombre: "sandwich", precio: 150 },
  { nombre: "papas", precio: 200 },
  { nombre: "gaseosa", precio: 250 },
  { nombre: "cerveza", precio: 300 },
  { nombre: "pasta", precio: 350 },
];

let carrito = [];
let nombre = "";
let apellido = "";
let alias = "";
let calle = "";
let altura = "";
let contacto = 0;

/*------------ VARIABLES ------------*/
/*---------------------------------*/

/*---------------------------------*/
/*------------ DATOS DEL COMPRADOR ------------*/

function ingresoDeDatos() {
  nombre += prompt("Ingrese su nombre");
  apellido += prompt("ingrese su apellido");
  contacto += parseInt(
    prompt("ingrese su numero telefonico para poder contactarnos")
  );
  calle += prompt("ingrese la calle sobre la que se encuentra su domicilio");
  altura += prompt("ingrese la altura en la que se encuentra su domicilio");
  alert("Sera necesario crear un alias para la correcta entrega");
  alias += prompt("Ingrese su alias");
  let datosComprador = `-Nombre: ${nombre}\n-Apellido: ${apellido}\n-Alias: ${alias}\n-Telefono: ${contacto}\n-Domicilio: ${calle} ${altura}`;
  return datosComprador;
}

let seleccionDatos = prompt(
  `los datos:\n${ingresoDeDatos()}\nson correctos? \nresponde con "si" o "no"`
);

while (seleccionDatos != "si" && seleccionDatos != "no") {
  confirmacion = prompt(`Responde con "si" o "no"`);
  seleccionDatos = confirmacion;
}

/*------------ DATOS DEL COMPRADOR ------------*/
/*---------------------------------*/

/*---------------------------------*/
/*------------ COMPRA ------------*/

if (seleccionDatos === "si") {
  alert(
    "A continuacion nuestros productos disponibles.\nSelecciona cual o cuales queres de la siguiente lista:"
  );
  let listaDeProductos = productos.map(
    (producto) => producto.nombre + " - " + "$" + producto.precio
  );
  alert(listaDeProductos.join("\n"));
} else {
  alert("gracias, hasta la proxima!");
}

function comprar() {
  /*---------------------------------*/
  /*------------ AGREGAR PRODUCTO ------------*/

  let id = "";
  while (id != "comprar") {
    id = prompt(
      `ingresa el nombre del producto o pasa a finalizar tu compra escribiendo "comprar"`
    );
    if (
      id == "hamburguesa" ||
      id == "sandwich" ||
      id == "papas" ||
      id == "gaseosa" ||
      id == "cerveza" ||
      id == "pasta"
    ) {
      switch (id) {
        case "hamburguesa":
          precio = 100;
          break;
        case "sandwich":
          precio = 150;
          break;
        case "papas":
          precio = 200;
          break;
        case "gaseosa":
          precio = 250;
          break;
        case "cerveza":
          precio = 300;
          break;
        case "pasta":
          precio = 350;
          break;
        default:
          break;
      }
      let cantidad = parseInt(prompt("cuantas unidades queres?"));
      carrito.push({ id, precio, cantidad });

      /*------------ AGREGAR PRODUCTO ------------*/
      /*---------------------------------*/
    }
  }

  /*---------------------------------*/
  /*------------ RESUMEN DE COMPRA ------------*/

  let compra = carrito.map((e) => e.id + " - " + "$" + e.precio * e.cantidad);
  alert(`Los productos seleccionados son:\n${compra.join("\n")}`);
  const total = carrito.reduce(
    (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
    0
  );
  alert(`El total a pagar es de: $${total}`);

  /*------------ RESUMEN DE COMPRA ------------*/
  /*---------------------------------*/
}
comprar();

let terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
while (terminarCompra !== "no" || terminarCompra !== "si") {
  if (terminarCompra == "si") {
    alert(
      `Gracias ${alias} por tu compra!!\nTe avisamos cuando sale tu pedido con destino: ${calle} ${altura}!!`
    );
    break;
  } else if (terminarCompra == "no") {
    alert(`Gracias, te esperamos la proxima!!`);
    break;
  } else {
    alert(`responde con "si" o "no"`);
    terminarCompra = prompt(`confirmar compra?\n("si" - "no")`);
  }
}

/*------------ COMPRA ------------*/
/*---------------------------------*/
