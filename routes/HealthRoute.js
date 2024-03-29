import express from 'express';

const router = express.Router();

router.get("/", async(req, res) => {
    const data = {
        uptime: process.uptime(),
        message: 'Ok',
        date: new Date()
    }

    res.status(200).send(data);
})

export default router;
