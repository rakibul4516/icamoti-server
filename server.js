const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth-route')



mongoose
.connect('mongodb+srv://mdrakibulislam4516:mdrakibulislam4516@cluster0.jtaf8.mongodb.net/')
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log(error));


const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma',
        ],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth',authRouter)

app.listen(PORT, ()=>console.log(`Server is now running on port ${PORT}`))