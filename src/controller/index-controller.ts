import express, { Request, Response, NextFunction} from 'express';

import mongoose from "mongoose";
import Users from "../models/user-model";

export async function register(req: Request, res: Response, next: NextFunction) {

    try {
        const user = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            isAdmin: req.body.isAdmin,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
    
        })
    
        await user.save()
        res.json({ status: "successful", user })

        
        
    } catch (error) {
        res.json( {status: 'failed', error: error })
        
    }
    
}
