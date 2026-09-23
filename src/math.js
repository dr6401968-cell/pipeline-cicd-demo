/**
 * Módulo de operaciones matemáticas básicas.
 * Esta es la "lógica de negocio" mínima de la aplicación de ejemplo
 * que usaremos para demostrar el pipeline de CI/CD.
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
