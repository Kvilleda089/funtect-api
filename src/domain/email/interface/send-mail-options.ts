export interface SendMailOption{
    to: string | string[];
    subject: string;
    htmlBody: string;
    text: string;
    from: string;
}