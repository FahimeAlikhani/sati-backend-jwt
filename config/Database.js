import {Sequelize} from "sequelize";

const db = new Sequelize("mysql", "root", "866126688", {
    host: "localhost",
    dialect: "mysql",
    port: "3306",
    connectionLimit: 10,
    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  });

// const db = new Sequelize("peakelev_satyar", "peakelev_alikhani", "i.g~t()*F@rC", {
//    host: "localhost",
//    dialect: "mysql",
//    port: "3306",
//    connectionLimit: 10,
//    //socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
//  }); 	
  db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
export default db;


	
// // Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
//   });