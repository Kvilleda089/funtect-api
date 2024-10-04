import { Router, Response, Request } from "express";
import { AppointmentController } from '../controllers/appointment.controller';

const appointmentRouter = Router();
const appointmentController = new AppointmentController();

appointmentRouter.post('/book-appointments', (request: Request, response:Response) =>{
    appointmentController.createAppointment(request, response);
});


export default appointmentRouter;