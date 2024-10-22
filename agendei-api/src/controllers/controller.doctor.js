import ServiceDoctor from "../services/service.doctor.js";

async function Listar(req, res){

    const doctors = await ServiceDoctor.Listar();

    res.status(200).json(doctors);
}

export default {Listar}