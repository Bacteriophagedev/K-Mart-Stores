import mongoose, { mongo } from 'mongoose';

const { Schema } = mongoose

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true } ,
    lastName: { type: String, required: true } ,
    password: { type: String, required: true } ,
    confirmPassword: String,
    isAdmin: { type: Boolean, default: false },
    phoneNumber: { type: String, required: true } ,
    address: { type: String, required: true } ,
    signupDate: { type: Date, default: Date.now }
})

const Users = mongoose.model('Users', userSchema)

export default Users