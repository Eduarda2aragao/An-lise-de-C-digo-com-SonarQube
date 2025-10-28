const { getAllUsers: loadUsers, saveUsers } = require('../models/UserModel');

// Função para obter todos os usuários
const getAllUsers = () => {
    return loadUsers();
};

// Função para obter um usuário por ID
const getUserById = (id) => {
    const users = loadUsers();
    return users.find(user => user.id === id);
};

// Função para criar um novo usuário
const createUser = (userData) => {
    const users = loadUsers();
    const newId = users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
    const newUser = { id: newId, ...userData };
    users.push(newUser);
    saveUsers(users);
    return newUser;
};

// Função para atualizar um usuário
const updateUser = (id, updatedData) => {
    const users = loadUsers();
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) throw new Error('Usuário não encontrado.');

    users[userIndex] = { ...users[userIndex], ...updatedData };
    saveUsers(users);
    return users[userIndex];
};

// Função para deletar um usuário
const deleteUser = (id) => {
    const users = loadUsers();
    const updatedUsers = users.filter(user => user.id !== id);

    if (users.length === updatedUsers.length)
        throw new Error('Usuário não encontrado.');

    saveUsers(updatedUsers);
};

// Exporta todas as funções para serem usadas em outros módulos
module.exports = { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
};