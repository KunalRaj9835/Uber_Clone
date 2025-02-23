const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes')

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());



app.get('/',(req,res) => { 
    res.send('Hello World');
});
app.use('/user',userRoutes);
app.use('/captain',captainRoutes);
app.use('/maps',mapsRoutes)
app.use('/rides',rideRoutes)

console.log("User routes loaded");


module.exports = app;

console.log("Registered Routes:");
app._router.stack.forEach((r) => {
    if (r.route) {
        console.log(`Route: ${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
    }
});

