import { Router } from "express";
import bodyParser from 'body-parser';
import {loginpatientController} from '../controllers/loginPatientController.js'

const router = Router();

const jsonParser = bodyParser.json()

const urlencodedParser = bodyParser.urlencoded({extended: false})

router.post('/loginPa', (req,res) => loginpatientController.patient_login(req,res));


export default router;