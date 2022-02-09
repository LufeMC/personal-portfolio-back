// Main imports
import express from 'express'
import { Request } from '../models/request';
const router = express.Router() // Configuring this file as a router (manager of the URL extensions)
import {mailer} from '../mailer'

router.post("/save", async (req, res) => {
    const request = new Request(req.body);
  
    try {
      await request.save();
      res.json(request);
    } catch (error) {
      res.status(500).send(error);
    }
});

router.post("/sendEmail", async (req, res) => {
  const request = req.body;

  try {
    const email = await mailer.sendEmail(
      `New request from ${request.name}`,
      `You received a new request!\n\n
      ${request.name} whose email is ${request.email} has made a new request.\n\n
      They want you to to the following:\n${request.details}\n\n
      They have ${request.budget} and need the project until ${request.deadline}`);
    res.json(email);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router