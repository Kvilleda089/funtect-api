import nodemailer from 'nodemailer'
import { envs } from '../../config/envs';
import { SendMailOption } from './interface/send-mail-options';


export class EmailService {
    
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    });

    public async sendEmail(sendEmailOptions: SendMailOption): Promise<void> {
        await this.transporter.sendMail({
            from: envs.MAILER_EMAIL,
            replyTo: sendEmailOptions.from,
            to: sendEmailOptions.to,
            subject: sendEmailOptions.subject,
            text: sendEmailOptions.text,
            html: sendEmailOptions.htmlBody,
        });
    };

    public async sendConfirmationEmail(to: string, fullName: string): Promise<void>{
        const subject = `Confirmación Cita`;
        const text = `Hola ${fullName}, gracias por ponerse en contacto. Pronto nos pondremos en contacto para colaborar con algunos datos`;
        const htmlBody= `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7; border-radius: 8px;">
            <h2 style="color: #333;">Confirmación de Cita</h2>
            <p style="font-size: 16px; color: #555;">Hola <strong>${fullName}</strong>,</p>
            <p style="font-size: 16px; color: #555;">
                Gracias por ponerse en contacto con nosotros. 
                Pronto nos pondremos en contacto para colaborar con algunos datos.
            </p>
            <p style="font-size: 16px; color: #555;">
                Si tiene alguna pregunta, no dude en responder a este correo electrónico.
            </p>
            <p style="font-size: 16px; color: #555;">
                ¡Que tenga un excelente día!
            </p>
            <footer style="margin-top: 20px; font-size: 14px; color: #777;">
                <p>Atentamente,</p>
                <p>El equipo de Funtect</p>
            </footer>
        </div>
    `;
        await this.transporter.sendMail({
            from: envs.MAILER_EMAIL,
            to,
            subject,
            text,
            html: htmlBody
        })
    }
}