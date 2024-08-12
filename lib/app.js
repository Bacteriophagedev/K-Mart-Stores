"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = require("dotenv");
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const api = process.env.API_URL;
const connectionString = process.env.CONNECTION_STRING;
if (!connectionString) {
    console.error('Connection string is not defined.');
    process.exit(1); // Exit the process or handle the error accordingly
}
else {
    mongoose_1.default.connect(connectionString, {
        dbName: 'Ecommerce-Store'
    })
        .then(() => {
        console.log('DATABASE CONNECTED...');
    })
        .catch((err) => {
        console.error(err);
    });
}
//Middlewares
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../', 'public')));
//Routers
const index_1 = __importDefault(require("./routes/index"));
const users_1 = __importDefault(require("./routes/users"));
const products_1 = __importDefault(require("./routes/products"));
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//Routes
app.use(`${api}/`, index_1.default);
app.use(`${api}/users`, users_1.default);
app.use(`${api}/products`, products_1.default);
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
module.exports = app;
