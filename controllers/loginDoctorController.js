import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getLogin } from '../models/login.js';
import bodyParser from "body-parser";
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const doctor_login = async (req, res) => {
    const user_login = await getLogin.findOne({ where: { user: req.body.user } });
    if (user_login) {
        const validPassword = bcryptjs.compareSync(req.body.pass, user_login.pass);

        if (validPassword) {
            const token = jwt.sign({
                sub: user_login.user,
            }, 'secret')
            user_login.token = token;

            res.header('auth-token', token).json({
                error: null,
                data: { token, user: user_login.user, validate: user_login.validate }
            });

        }
        else {
            return res.status(400).json({ error: 'password not validate' })
        }

    }
    else {
        return res.status(400).json({ error: 'doctor not found' });
    }


};

export const loginDoctorController = { doctor_login };