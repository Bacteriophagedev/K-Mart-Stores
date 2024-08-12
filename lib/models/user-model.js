"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const userSchema = new mongoose_1.default.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    confirmPassword: String,
    isAdmin: { type: Boolean, default: false },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    signupDate: { type: Date, default: Date.now }
});
const Users = mongoose_1.default.model('Users', userSchema);
exports.default = Users;
