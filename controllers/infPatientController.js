import { Router } from 'express';
import { getInfPatient } from '../model/InfPatient.js';

const router = Router();

const viewAllPatients = async (req, res)=> {
    getInfPatient.findAll({ 
        attributes: ['age','allergies','medicines','vacciones','Mebackground','problemSa'] })
        .then(patient => {
            res.send(patient)
        })
        .catch(err => {
            console.log(err)
    })
};

const patientInf_viewById = async (req, res) => {
    getLocal.findAll({ where: { id: req.query.id },
        attributes: ['age','allergies','medicines','vacciones','Mebackground','problemSa'] })
    
    .then(contenido => {
        res.send(contenido)
    })
    .catch(err => {
        res.status(400).json({ err: 'Error patient not found' });    
    })
    
};


const patientsInf_create = async (req, res) => {
    const { age, allergies, medicines, vacciones, Mebackground, problemSa } = req.bobdy;

    getInfPatient
        .create({
            age:age,
            allergies:allergies,
            medicines:medicines,
            vacciones:vacciones,
            Mebackground:Mebackground,
            problemSa:problemSa
        })
        .then((contenido) => {
            res.send(contenido);
        })
        .catch((err) => {
            console.error(err); 
            res.status(400).json({ error: 'Error create register information patient' });
        });
};

const updatePatientInf = async (req,res)=>{
    const id= req.params.id;
    const { age, allergies, medicines, vacciones, Mebackground, problemSa } = req.query;
    getInfPatient.update(
        {
            age: age,
            allergies: allergies,
            medicines: medicines,
            vacciones: vacciones,
            Mebackground: Mebackground,
            problemSa: problemSa 
        },
        {
            where: { id: id }
        }
    )
        .then(() => {
            res.send('information of the patient update');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error updating patient');
        });
};




const deletePatientInf = async (req,res)=>{
    let id = req.params.id;
    getInfPatient.destroy({
        where: { id: id }
    }).then(() => {
        res.send('patient information destroy')
    })
};

export const InfPatientController = {viewAllPatients, patientInf_viewById, patientsInf_create, updatePatientInf, deletePatientInf};



