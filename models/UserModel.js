import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define('users',{
    userName:{
        type: DataTypes.STRING
    },
    personId:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

db.sync().then(() => {
    console.log('users table created successfully!');
 }).catch((error) => {
    console.error('Unable to crate Users table: ', error);
 });
export default Users;