import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { connectDB } from './config/db.js';
import { app, server } from './socket/socket.js';

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import userRoutes from './routes/user.route.js';

app.use(cookieParser()); // To parse incoming requests with cookies (req.cookies)
app.use(express.json()); // To parse incoming requests with JSON payloads (req.body)

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
