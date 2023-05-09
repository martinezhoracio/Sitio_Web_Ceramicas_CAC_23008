/*
Este código define una función llamada validarFormulario que se
ejecuta cuando se envía el formulario. Dentro de esta función,
se obtienen los valores ingresados por el usuario utilizando la
propiedad value de los elementos del formulario correspondientes.
Luego, se verifican si los campos están en blanco utilizando la
comparación === "".

Para validar el campo de nombre, se utiliza un bucle for que
recorre cada carácter de la cadena de nombre. Se utiliza la función
charCodeAt para obtener el código Unicode del carácter en la posi-
ción actual y se verifica si es un carácter alfabético (A-Z o a-z)
o un espacio ( ). Si el carácter no cumple con estas condiciones,
se muestra una alerta y se devuelve false.

Para validar el campo de DNI, se verifica si la longitud es exacta-
mente 8 dígitos y luego se utiliza otro bucle for para verificar si
cada carácter es un dígito numérico (0-9). Si el campo no cumple con
estas condiciones, se muestra una alerta y se devuelve false.

Finalmente, si todas las validaciones son exitosas, se muestra una
alerta indicando que el formulario se envió correctamente y se de-
vuelve true.
*/

function validarFormulario() {
    // Obtener los valores ingresados por el usuario y recortar
    // los posibles espacios en blanco al principio y al final.
    let nombre = document.getElementById("nombre").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let mail = document.getElementById("mail").value.trim();

    // Verificar si algún campo está en blanco
    if (nombre === "" || telefono === "" || mail === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false;
    }

    // Verificar si el nombre contiene solo caracteres alfabéticos y espacios
    for (let i = 0; i < nombre.length; i++) {
      let charCode = nombre.charCodeAt(i);
      if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
        alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
        return false;
      }
    } 

    // Verificar si el telefono tiene caracteres numéricos
    if (telefono.length !== 10) {
      alert("El campo     'telefono' debe contener exactamente 10 dígitos numéricos.");
      return false;
    }
    for (let j = 0; j < telefono.length; j++) {
      let digit = telefono.charAt(j);
      if (digit < "0" || digit > "9") {
        alert("El campo 'telefono' solo puede contener dígitos numéricos.");
        return false;
      }
    }

    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Formulario enviado correctamente.");
    return true;
  }
