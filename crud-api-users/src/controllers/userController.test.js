const userController = require('../controllers/userController');

test('Deve verificar se a função getAll é definida', () => {
  expect(typeof userController.getAll).toBe('function');
});