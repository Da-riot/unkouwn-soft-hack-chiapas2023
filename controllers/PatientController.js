import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getPatient } from '../models/Patient.js';

const patient_viewAll = async (req, res) => {
    getPatient
        .findAll({ attributes: ['namePatient', 'last_name', 'email', 'password'] })
        .then((contenido) => {
            res.send(contenido);
        })
        .catch((err) => {
            res.status(400).json({ error: 'Error obtaining patients' });
        });
};

const patient_create = async (req, res) => {
    const { nameDoctor, last_name, email, password } = req.body;

    getPatient
        .create({
            nameDoctor: nameDoctor,
            last_name: last_name,
            email: email,
            password: password
        })
        .then((contenido) => {
            res.send(contenido);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ error: 'Error create register patient' });
        });
};

const patient_update = async (req, res) => {
    const id = req.params.id;
    const {nameDoctor, last_name, email, password } = req.query;
    getPatient.update(
        {
            nameDoctor: nameDoctor,
            last_name: last_name,
            email: email,
            password: password
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


const patient_delete = async (req, res) => {
    let id = req.params.id;
    getPatient.destroy({
        where: { id: id }
    }).then(() => {
        res.send('information patient destroy')
    })

};


export const patientController = { patient_viewAll, patient_create, patient_update, patient_delete };