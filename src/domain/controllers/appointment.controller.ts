import { AppointService } from '../service/appointment.service';
import { Response, Request } from 'express';

const appointmentService = new AppointService()
export class AppointmentController {
    

    public async createAppointment(request: Request, response: Response): Promise<Response>{
        try {
            const appointment = await appointmentService.createAppointment(request.body);
            return response.status(201).json(appointment);
        } catch (error) {
            return response.status(500).json({ message: `Error creating ${error}` })
        }
    }
}