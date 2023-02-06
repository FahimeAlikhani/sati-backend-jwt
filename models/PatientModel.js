// import { Sequelize } from "sequelize";
// import db from "../config/Database.js";

// const { DataTypes } = Sequelize;

// const Patients = db.define('patients',{
//     name:{
//         type: DataTypes.STRING
//     },
//     father_name:{
//         type: DataTypes.STRING
//     },
//     file_number:{
//         type: DataTypes.STRING
//     },
//     hospitalization_date:{
//         type: DataTypes.STRING
//     },
//     part:{
//         type: DataTypes.STRING
//     },
//     doctor:{
//         type: DataTypes.STRING
//     }
// },{
//     freezeTableName:true
// });

// db.sync().then(() => {
//     console.log('patients table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to crate patients table: ', error);
//  });
// export default Patients;