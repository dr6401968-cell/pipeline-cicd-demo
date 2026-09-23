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

