import { Router } from 'express';
import bodyParser from 'body-parser';
import { doctorController } from '../controllers/DoctorController.js';
import  verifyToken  from '../middlewares/token.middleware.js';

const router = Router();

router.post('/create_doctor',verifyToken,(req, res) => doctorController.doctor_create(req, res));

router.put('/update_doctor',(req, res) => doctorController.doctor_update(req, res));

router.delete('/delete_doctor',(req, res) => doctorController.doctor_delete(req, res));

router.get('/viewAll_doctor', (req, res) => doctorController.doctor_viewAll(req, res));

export default router;

