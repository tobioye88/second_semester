import * as authService from "../services/auth.service.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500);
    res.json({ message: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const result = await authService.register(name, email, password);
    res.json(result);
  } catch (err) {
    res.status(err.status || 500);
    res.json({ message: err.message });
  }
};
