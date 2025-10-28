const userModel = require('../models/UserModel');

// Função para listar todos os usuários
const listUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para obter um usuário por ID
const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(parseInt(req.params.id));
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para criar um usuário
const createUser = async (req, res) => {
    try {
        const newUser = await userModel.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para atualizar um usuário
const updateUser = async (req, res) => {
    try {
        const updatedUser = await userModel.updateUser(parseInt(req.params.id), req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Função para deletar um usuário
const deleteUser = async (req, res) => {
    try {
        await userModel.deleteUser(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Exportação — inclui o alias "getAll" para compatibilidade com os testes
module.exports = { 
    listUsers, 
    getAll: listUsers,  // 👈 adiciona compatibilidade com o teste
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
};