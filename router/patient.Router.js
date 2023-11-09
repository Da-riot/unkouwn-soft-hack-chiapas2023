import { Router } from 'express';
import bodyParser from 'body-parser';
import { patientController } from '../controllers/PatientController.js';
import  verifyToken  from '../middlewares/token.middleware.js';

const router = Router();

router.post('/create_patient',verifyToken,(req, res) => patientController.patient_create(req, res));

router.put('/update_patient',(req, res) => patientController.patient_update(req, res));

router.delete('/delete_patient',(req, res) => patientController.patient_delete(req, res));

router.get('/viewAll_patient', (req, res) => patientController.patient_viewAll(req, res));

export default router;

