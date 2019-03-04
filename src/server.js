// import express
import express from 'express';
import bodyParser from 'body-parser';
import * as constants from './constants'; // import constants
import routes from './routes';
import MongoDB from './db/mongodb';
import morgan from 'morgan';

const app = express(); // new server

//JWT Token configuration
app.set('secret', `${constants.SECRET}`);//Secret Variable

// parse body params
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use morgan to log requests to the console
app.use(morgan('dev'));

//API Endpoints
app.use('/api', routes);

// start app on PORT
app.listen(constants.PORT, () => console.log(`Started server on ${constants.PORT}`));

MongoDB.connectDB(async (err) => {
    if (err) throw err
    else console.log("Mongo connected successfully");
})

app.use(function (err, req, res, next) {
    console.log('Error handler called');
    let data = err || {"message":"Error occured."};
    return res.status(500).json(data);
});

export default app;