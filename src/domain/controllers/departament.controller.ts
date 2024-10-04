import { Request, Response } from "express";
import { DepartamentService } from "../service/departament.service";


const departamentService = new DepartamentService();

export class DepartamentController {

    public async insertDepartament(request: Request, response: Response): Promise<Response>{
        try {
            const departament = await departamentService.insertDepartament(request.body);
            return response.status(201).json(departament);
        } catch (error) {
            return response.status(500).json({ message: `Error creating ${error}` })
        };
    };

    public async getAllDepartaments(request: Request, response: Response): Promise<Response>{
        try {
            const departaments = await departamentService.getAllDepartaments();
            return response.status(200).json({departaments: departaments});
        } catch (error) {
            return response.status(500).json({ message: `Error  ${error}` })
        }
    }


}