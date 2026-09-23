const test = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply, divide } = require('../src/math');

test('add: suma dos números correctamente', () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

test('subtract: resta dos números correctamente', () => {
  assert.strictEqual(subtract(5, 3), 2);
});

test('multiply: multiplica dos números correctamente', () => {
  assert.strictEqual(multiply(4, 3), 12);
});

test('divide: divide dos números correctamente', () => {
  assert.strictEqual(divide(10, 2), 5);
});

test('divide: lanza un error al dividir por cero', () => {
  assert.throws(() => divide(10, 0), /No se puede dividir por cero/);
});

/*
  NOTA PARA LA DEMOSTRACIÓN DE FALLO CONTROLADO (paso 4 de la actividad):
  Para simular un error intencional, puedes cambiar temporalmente
  la línea de arriba a:

    assert.strictEqual(divide(10, 2), 999);   // <-- valor incorrecto a propósito

  Esto hará que el job de "tests" falle en GitHub Actions y, gracias a la
  configuración de dependencias entre jobs (needs:), el job de "build" y
  el de "deploy" NO se ejecutarán. Después, corrige la línea a su valor
  original (5), haz commit y push de nuevo para ver el pipeline en verde.
*/
