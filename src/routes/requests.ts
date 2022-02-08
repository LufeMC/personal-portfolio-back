// Main imports
import express from 'express'
import { Request } from '../models/request';
const router = express.Router() // Configuring this file as a router (manager of the URL extensions)

router.post("/save", async (req, res) => {
    const request = new Request(req.body);
  
    try {
      await request.save();
      res.json(request);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router