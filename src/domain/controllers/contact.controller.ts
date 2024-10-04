import { ConctactService } from "../service/contact.service";
import { Response, Request} from 'express';

const contactService = new ConctactService();
export class ContactController{
    public async sendContactEmail(request: Request, response:Response): Promise<Response>{
        try {
                const {fullName, email, message, departament, appointmentDay, appointmentTime} = request.body;
                await contactService.sendContactForm({fullName, email, message, departament, appointmentDay, appointmentTime});
                return response.status(200).json({message: 'El Correo se envió correctamente'});
        } catch (error) {
            return response.status(500).json({message: `Error: ${error}`});
        }
    }
}