// import Patients from "../models/PatientModel.js";

// export const getPatients = async(req, res) => {
//     try {
//         const patients = await Patients.findAll({
//             attributes:['id','name','father_name','file_number','hospitalization_date','part','doctor']
//         });
//         res.json(patients);
//     } catch (error) {
//         console.log(error);
//     }
// }