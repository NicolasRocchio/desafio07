import './style.css';

/* 1. Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor. */
let nombre = 'Nicolas';
console.log(nombre);

/* 2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante). */
let edad = 25;
let precio = 29.99;
let ciudad = 'Ciudad de Ejemplo';
let esEstudiante = true;
console.log(edad, precio, ciudad, esEstudiante);

/* 3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]". */
nombre = 'Juan';
let apellido = 'Pérez';
alert('Hola, ' + nombre + ' ' + apellido);

/* 4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas. */
let num1 = 10;
let num2 = 5;
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;
console.log('El resultado de la suma es ' + suma);
console.log('El resultado de la resta es ' + resta);
console.log('El resultado de la multiplicacion es ' + multiplicacion);
console.log('El resultado de la division es ' + division);

/* 5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor. */
let contador = 0;
console.log('Valor inicial de contador:', contador); // Imprime el valor inicial de contador
contador++;
console.log('Valor de contador después de incrementar:', contador);
contador++;
console.log('Valor de contador después de incrementar:', contador);
contador--;
console.log('Valor de contador después de decrementar:', contador);

/* 6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert(). */
nombre = prompt('Por favor, ingresa tu nombre:');
alert('¡Hola, ' + nombre + '!');

/* 7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2). */
let radio = prompt('Ingresa el radio del círculo:');
let area = Math.PI * Math.pow(radio, 2);
console.log(area);

/* 8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit. */
const celsius = prompt('Ingresa la temperatura en grados Celsius:');
const fahrenheit = (celsius * 9) / 5 + 32;
console.log(fahrenheit);

/* 9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio. */
num1 = prompt('Ingresa el primer número:');
num2 = prompt('Ingresa el segundo número:');
let num3 = prompt('Ingresa el tercer número:');
const promedio = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
console.log(
  '"l promedio de ' + num1 + ', ' + num2 + ' y ' + num3 + ' es ' + promedio,
);

/* 10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo. */
const numero = prompt('Ingresa un número:');
const resultado = numero >= 0 ? 'positivo' : 'negativo';
console.log(resultado);

/* 11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad. */
edad = prompt('¿Cuál es tu edad?');
if (edad >= 18) {
  alert('Eres mayor de edad.');
} else {
  alert('Eres menor de edad.');
}

/* 12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente. */
const dia = prompt('Ingresa un número del 1 al 7:');
let nombreDia;
switch (parseInt(dia)) {
  case 1:
    nombreDia = 'Lunes';
    break;
  case 2:
    nombreDia = 'Martes';
    break;
  case 3:
    nombreDia = 'Miércoles';
    break;
  case 4:
    nombreDia = 'Jueves';
    break;
  case 5:
    nombreDia = 'Viernes';
    break;
  case 6:
    nombreDia = 'Sábado';
    break;
  case 7:
    nombreDia = 'Domingo';
    break;
  default:
    nombreDia = 'Día inválido';
}
alert('El día correspondiente es: ' + nombreDia);
