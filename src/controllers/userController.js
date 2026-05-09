import { userService } from '../services/userService.js';

export const userController = {
  async getAll(req, res) {
    try {
      const users = await userService.getAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async getById(req, res) {
    try {
      const user = await userService.getById(req.params.id);
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  async create(req, res) {
    try {
      const newUser = await userService.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async update(req, res) {
    try {
      const updated = await userService.update(req.params.id, req.body);
      if (!updated) return res.status(404).json({ message: 'User not found' });
      res.json(updated);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  async remove(req, res) {
    try {
      const deleted = await userService.remove(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'User not found' });
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

