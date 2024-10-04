import { Router, Response, Request } from 'express';
import { DepartamentController } from "../controllers/departament.controller";


const departementRouter = Router();
const departamentController = new DepartamentController();

departementRouter.post('/departaments', (request: Request, response:Response) =>{
    departamentController.insertDepartament(request, response);
});

departementRouter.get('/departaments', (request: Request, response: Response)=>{
    departamentController.getAllDepartaments(request, response);
})



export default departementRouter;