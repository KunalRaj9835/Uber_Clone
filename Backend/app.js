const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes')

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users',userRoutes);

app.get('/',(req,res) => { 
    res.send('Hello World');
});
console.log("User routes loaded");


module.exports = app;

console.log("Registered Routes:");
app._router.stack.forEach((r) => {
    if (r.route) {
        console.log(`Route: ${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
    }
});

