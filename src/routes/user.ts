// Main imports
import express from 'express'
import { User } from '../models/user';
const router = express.Router() // Configuring this file as a router (manager of the URL extensions)

router.post("/save", async (req, res) => {
    const user = new User(req.body);
  
    try {
      await user.save();
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router