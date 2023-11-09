import { Router } from 'express';
import { dataEnv } from '../config/envData.js';
import { getDoctor } from '../models/Doctor.js';

const doctor_viewAll = async (req, res) => {
    getDoctor
        .findAll({ attributes: ['nameDoctor', 'last_name', 'specialty', 'email', 'password'] })
        .then((contenido) => {
            res.send(contenido);
        })
        .catch((err) => {
            res.status(400).json({ error: 'Error al obtener los registros' });
        });
};

const doctor_create = async (req, res) => {
    const { nameDoctor, last_name, specialty, email, password } = req.body;

    getDoctor
        .create({
            nameDoctor: nameDoctor,
            last_name: last_name,
            specialty: specialty,
            email: email,
            password: password
        })
        .then((contenido) => {
            res.send(contenido);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json({ error: 'Error create register' });
        });
};

const doctor_update = async (req, res) => {
    const id = req.params.id;
    const {nameDoctor, last_name, specialty, email, password } = req.query;
    getDoctor.update(
        {
            nameDoctor: nameDoctor,
            last_name: last_name,
            specialty: specialty,
            email: email,
            password: password
        },
        {
            where: { id: id }
        }
    )
        .then(() => {
            res.send('information of the doctor update');
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send('Error updating doctor');
        });
};


const doctor_delete = async (req, res) => {
    let id = req.params.id;
    getDoctor.destroy({
        where: { id: id }
    }).then(() => {
        res.send('information doctor destroy')
    })

};


export const doctorController = { doctor_viewAll, doctor_create, doctor_update, doctor_delete };