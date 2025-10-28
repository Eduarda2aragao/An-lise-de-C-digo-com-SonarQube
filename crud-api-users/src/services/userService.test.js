// 👇 Simula o módulo mysql2/promise
jest.mock('mysql2/promise', () => ({
  createConnection: jest.fn().mockResolvedValue({
    execute: jest.fn().mockResolvedValue([[]]), // retorna lista vazia simulada
    end: jest.fn().mockResolvedValue()
  })
}));

const userService = require('../services/userService');

test('Deve retornar lista de usuários', async () => {
  const result = await userService.getAllUsers();
  expect(Array.isArray(result)).toBe(true);
});
