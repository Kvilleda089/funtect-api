import { EmailService } from "../email/email.service";
import { SendMailOption } from "../email/interface/send-mail-options";
import { envs } from '../../config/envs';
import { ContactFormData } from "./interface/contact-form.interface";

const emailService = new EmailService();
export class ConctactService {
    public async sendContactForm(data: ContactFormData): Promise<void> {
        const { fullName, email, message, departament, appointmentDay, appointmentTime } = data;
        const subject = `Nuevo mensaje ${fullName}`;
        const text = `Nombre: ${fullName} \nEmail: ${email}\nMensaje: ${message}\nDepartamento: ${departament}\nDía de Cita: ${appointmentDay}\nHora de Cita: ${appointmentTime}`;

        const sendMailOption: SendMailOption = {
            from: email,
            to: envs.MAILER_EMAIL,
            subject,
            text,
            htmlBody: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7; border-radius: 8px;">
            <h2 style="color: #333;">Datos de Contacto</h2>
            <p style="font-size: 16px; color: #555;">
                <strong>Nombre:</strong> ${fullName}
            </p>
            <p style="font-size: 16px; color: #555;">
                <strong>Email:</strong> ${email}
            </p>
            <p style="font-size: 16px; color: #555;">
                <strong>Departamento:</strong> ${departament}
            </p>
            <p style="font-size: 16px; color: #555;">
                <strong>Día de Cita:</strong> ${appointmentDay}
            </p>
            <p style="font-size: 16px; color: #555;">
                <strong>Hora de Cita:</strong> ${appointmentTime}
            </p>
            <h2 style="color: #333;">Descripción</h2>
            <p style="font-size: 16px; color: #555;">
                <strong>Mensaje:</strong> ${message}
            </p>
        </div>
    `
        };

        await emailService.sendEmail(sendMailOption);
        await emailService.sendConfirmationEmail(email, fullName);

    }
}