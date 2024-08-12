import express, { Request, Response, NextFunction } from 'express';

import createError from "http-errors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan"
import { config } from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express()
config()
const api = process.env.API_URL


const connectionString = process.env.CONNECTION_STRING as string;

if (!connectionString) {
  console.error('Connection string is not defined.');
  process.exit(1); // Exit the process or handle the error accordingly
}
else {
  mongoose.connect(connectionString, {
  })
    .then(() => {
      console.log('DATABASE CONNECTED...');
    })
    .catch((err) => {
      console.error(err);
    });

}



//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../', 'public')));


//Routers
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import productsRouter from './routes/products';




// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use(`${api}/`, indexRouter);
app.use(`${api}/users`, usersRouter);
app.use(`${api}/products`, productsRouter);




// catch 404 and forward to error handler

// app.use(function(req, res, next) {
//   next(createError(404));
// });


// // error handler
// app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app
