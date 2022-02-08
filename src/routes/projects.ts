// Main imports
import express from 'express'
import { Project } from '../models/projects';
const router = express.Router() // Configuring this file as a router (manager of the URL extensions)

router.post("/save", async (req, res) => {
    const project = new Project(req.body);

    
    try {
        await project.save();
        res.json(project);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/list", async (req, res) => {
    const projects = await Project.find({});

    try {
        res.json(projects);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router