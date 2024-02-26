import express from "express";
import { Task } from "../models/taskModel.js";

import AuthenticateToken from "../middleware/authenticateToken.js";
const router = express.Router();

// //create a task
router.post("/", AuthenticateToken, async (req, res) => {
  try {
    var data = {
      title: req.body.title,
      user: req.user.id,
      description: req.body.description,
      status: req.body.status,
      date: req.body.date,
    }
    return res.status(201).send(await Task.create(data));
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//get all 
router.get("/", AuthenticateToken, async (req, res) => {
  try {
    return res.status(200).send(await Task.find({ user: req.user.id })).exec();
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//get a task by id
router.get("/:id", AuthenticateToken, async (req, res) => {
  try {
    return res.status(200).send(await Task.findById(req.params.id));
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


//delelte a task by id
router.delete("/:id", AuthenticateToken, async (req, res) => {
  try {
    return res.status(200).send(await Task.findByIdAndDelete(req.params.id));
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//update a task by id
router.put("/:id", AuthenticateToken, async (req, res) => {
  try {
    return res.status(200).send(await Task.findByIdAndUpdate
      (req.params.id, req.body, { new: true }));
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
);

export default router;
