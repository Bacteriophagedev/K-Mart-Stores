"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_controller_1 = require("../controller/index-controller");
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ message: 'welcome' });
});
router.get('/register', function (req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json({ message: 'sign up here' });
});
router.post('/register', index_controller_1.register);
exports.default = router;
