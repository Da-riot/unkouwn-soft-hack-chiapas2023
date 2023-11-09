import { getData } from "../config/db.js";
import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
const loginPa = getData.sequelizeClient.define('login_Patient',{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        tableName: 'login_Patient',
        freezeTableName: true,
        hooks: {
         beforeCreate: (user, options) => {
             user.pass = user.pass && user.pass != "" ? bcrypt.hashSync(user.pass, 10): "";    
         }
        }
    });
export const getLoginPa = loginPa;