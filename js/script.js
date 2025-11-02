// ===============================
//  Diamond Dust Drinks - script.js
// ===============================

// Saludo inicial
alert(
  " Bienvenido a Diamond Dust Drinks — ¡Disfruta de nuestra carta artesanal!"
);

// ===============================
//  Verificación de edad
// ===============================
function verificarEdad() {
  let edad = prompt("Por favor ingresa tu edad:");

  // Validación con operadores de igualdad y relación
  if (edad == null || edad == "") {
    alert("No ingresaste una edad. Intenta de nuevo ");
    return;
  }

  edad = Number(edad);

  if (edad >= 18) {
    alert("Perfecto, puedes ingresar al bar. ");
  } else if (edad > 0 && edad < 18) {
    alert("Lo sentimos, el acceso es solo para mayores de edad ");
  } else {
    alert("Edad inválida. Inténtalo nuevamente.");
  }
}

// Ejecutar verificación al cargar la página
verificarEdad();

// ===============================
//  Bucle con incremento y break
// ===============================
let visitas = 0;
while (visitas < 3) {
  visitas++;
  console.log("Visita número: " + visitas);

  if (visitas === 3) {
    alert("¡Gracias por explorar nuestras secciones! ");
    break;
  }
}

// ===============================
//  Calcular total de pedido
// ===============================
function calcularTotal() {
  let cantidad = Number(prompt("¿Cuántos cócteles deseas pedir?"));
  let precioUnitario = 9000;
  let total = cantidad * precioUnitario;

  // Condicional con validación
  if (cantidad > 0) {
    alert("Total de tu pedido: $" + total);
  } else {
    alert("Cantidad no válida ");
  }
}

// ===============================
//  Promociones (bucle for)
// ===============================
for (let i = 1; i <= 3; i++) {
  console.log("Promoción #" + i + ": Descuento especial en cócteles ");
}
