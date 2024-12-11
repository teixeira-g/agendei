import ServiceAppointment from "../services/service.appointment.js";
import ServiceDoctor from "../services/service.doctor.js";

async function ListarByUser(req, res){

    const id_user = req.id_user;
    const appointment = await ServiceAppointment.Listar(id_user);

    res.status(200).json(appointment);
}

async function Inserir(req, res){

    const id_user = req.id_user;
    const {id_doctor, id_service, booking_date, booking_hour} = req.body;

    const appointment = await ServiceAppointment.Inserir(id_user, id_doctor, id_service, booking_date, booking_hour);

    res.status(201).json(appointment);
}

export default { ListarByUser, Inserir };