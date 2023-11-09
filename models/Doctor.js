import { getData } from '../config/db.js';
import { DataTypes } from 'sequelize';

const Doctor = getData.sequelizeClient.define('cat_Doctor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nameDoctor:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    specialty:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,   
    },
},
{
    tableName: 'cat_Doctor',
    freezeTableName: true,
    timestamps: true,
});
export const getDoctor = Doctor;