import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import projectsRouter from "./routes/api/projects.js";
import ordersRouter from "./routes/api/orders.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/projects', projectsRouter);
app.use('/api/orders', ordersRouter);

app.use((req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

export default app;