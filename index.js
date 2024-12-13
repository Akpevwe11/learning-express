import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/userRoutes.js'
import bodyParser from 'body-parser';

const app = express();

const PORT = 3000; 


// mongoose connection 
mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://akpevweessi1:vNZBAYrz3J2hwkII@cluster0.zgiwv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
 { useNewUrlParser: true, useUnifiedTopology: true });


 // bodyparser setup 

 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());

routes(app); 


app.get('/',  (req, res, next) => {

    res.send(`Node and express server running on port ${PORT}`);
    next(); 
}); 


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  

// app.post('/user/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
//   }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   });



