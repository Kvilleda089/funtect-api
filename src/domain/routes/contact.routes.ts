import { Router, Response, Request } from "express";
import { ContactController } from '../controllers/contact.controller';


const contactRouter = Router();
const contactController = new ContactController();

contactRouter.post('/contact-us', (request: Request, response: Response)=>{
    contactController.sendContactEmail(request, response);
});

export default contactRouter;