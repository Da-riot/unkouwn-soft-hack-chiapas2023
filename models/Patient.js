import { getData } from '../config/db.js';
import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';

const Patient = getData.sequelizeClient.define('cat_Patient', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    namePatient:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
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
    tableName: 'cat_Patient',
    freezeTableName: true,
    timestamps: true,
    hooks: {
        beforeCreate : (user, options ) => {
            user.pass = user.pass && user.pass != "" ? bcrypt.hashSync(user.pass, 10): "";
        }
    }
});
export const getPatient = Patient;