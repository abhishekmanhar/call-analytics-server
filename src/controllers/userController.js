import UserModel from "../models/User.js"

export async function createUser(req, res) {
  try {
    const user = new UserModel(req.body)
    const savedUser = await user.save()
    res.json(savedUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
