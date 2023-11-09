import { Router } from 'express';
import bodyParser from 'body-parser';
import { loginDoctorController } from '../controllers/loginDoctorController.js';

const router = Router();

const jsonParser = bodyParser.json()
 
const urlencodedParser = bodyParser.urlencoded({ extended: false })
 
router.post('/logiDoc', (req, res) =>loginDoctorController.user_login(req, res));

export default router;