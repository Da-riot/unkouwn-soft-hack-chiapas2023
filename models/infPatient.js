import { getData } from './db.js';
import { DataTypes } from 'sequelize';

const InfPatient = getData.sequelizeClient.define('inf_patient', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    age:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    allergies: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    medicines:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    vacciones:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    Mebackground:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    problemSa:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName: 'inf_patient',
    freezeTableName: true,
    timestamps: false,
});

//Local.belongsTo(getUsers, { foreignKey: 'userId' });

export const getInfPatient = InfPatient;