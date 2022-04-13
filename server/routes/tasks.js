const Task = require("../model/task");
const { ObjectId } = require("mongodb");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});
router.put("/:id", async (req, res) => {
    try {
        id = req.params.id;
        const tasks = await Task.findOneAndUpdate(
            {
                _id: id,
            },
            req.body,
        );
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const tasks = await Task.findByIdAndDelete(req.params.id);
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});
module.exports = router;
