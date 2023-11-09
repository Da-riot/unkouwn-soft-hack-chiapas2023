import { Router } from 'express';
import bodyParser from 'body-parser';
import { InfPatientController } from '../controllers/infPatientController.js';
import  verifyToken  from '../middlewares/token.middleware.js';

const router = Router();

router.post('/createPatient_inf',verifyToken,(req, res) => InfPatientController.patientsInf_create(req, res));

router.put('/updatePatient_inf',(req, res) => InfPatientController.updatePatientInf(req, res));

router.delete('/deletePatient_inf',(req, res) => InfPatientController.deletePatientInf(req, res));

router.get('/viewAllPatient_inf', (req, res) => InfPatientController.viewAllPatients(req, res));

router.get('/viewfPatientID_inf',(req, res)=> InfPatientController.patientInf_viewById(req,res));

export default router;

