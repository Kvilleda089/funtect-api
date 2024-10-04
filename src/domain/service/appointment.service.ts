import { Database } from "../database/database";
import { AppointmentEntity } from "../entity/appointment.entity";


export class AppointService {

    private appointmentRepository = Database.getInstance().getRepository(AppointmentEntity);

    public async createAppointment(data: AppointmentEntity): Promise<AppointmentEntity>{
        const {fullName, email, departament, appointmentDay, appointmentTime} = data;
        const newAppointment = new AppointmentEntity();
        newAppointment.fullName = fullName;
        newAppointment.email = email;
        newAppointment.departament = departament;
        newAppointment.appointmentDay = appointmentDay;
        newAppointment.appointmentTime = appointmentTime;
        return await this.appointmentRepository.save(newAppointment);
    }
}