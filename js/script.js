// Saludo inicial con alert
alert(
  "🍸 Bienvenido a Diamond Dust Drinks — ¡Disfruta de nuestra carta artesanal!"
);

// Función para verificar edad
function verificarEdad() {
  let edad = prompt("Por favor ingresa tu edad:");

  // Operadores de igualdad y relación
  if (edad == null || edad == "") {
    alert("No ingresaste una edad. Intenta de nuevo 🍹");
    return;
  }

  edad = Number(edad);

  if (edad >= 18) {
    alert("Perfecto, puedes ingresar al bar. 🥂");
  } else if (edad > 0 && edad < 18) {
    alert("Lo sentimos, el acceso es solo para mayores de edad 🚫");
  } else {
    alert("Edad inválida. Inténtalo nuevamente.");
  }
}

// Llamar la función de verificación al cargar
verificarEdad();

// Operadores de incremento y bucle while
let visitas = 0;
while (visitas < 3) {
  visitas++;
  console.log("Visita número: " + visitas);
  if (visitas === 3) {
    alert("¡Gracias por explorar nuestras secciones! 🎉");
    break; // uso de break
  }
}

// Función que calcula precio total simulado
function calcularTotal() {
  let cantidad = Number(prompt("¿Cuántos cócteles deseas pedir?"));
  let precioUnitario = 9000;
  let total = cantidad * precioUnitario;

  // Uso de if simple
  if (cantidad > 0) {
    alert("Total de tu pedido: $" + total);
  } else {
    alert("Cantidad no válida ❌");
  }
}

// Evento para probar la función desde botón
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.createElement("button");
  boton.textContent = "🧾 Calcular total";
  boton.className = "btn";
  boton.style.margin = "20px";
  document.querySelector(".cta").appendChild(boton);

  boton.addEventListener("click", calcularTotal);
});

// Uso de for para mostrar promociones
for (let i = 1; i <= 3; i++) {
  console.log("Promoción #" + i + ": Descuento especial en cócteles 🍹");
}
