import { Database } from "../database/database";
import { DepartamentEntity } from "../entity/departament.entity";


export class DepartamentService {

    private departamentRepository = Database.getInstance().getRepository(DepartamentEntity);

    public async insertDepartament(data: DepartamentEntity): Promise<DepartamentEntity> {
        const {departament } = data;
        const departamentNew = new DepartamentEntity();
        departamentNew.departament = departament;
        return  await this.departamentRepository.save(departamentNew);
    }

    public async getAllDepartaments(): Promise<DepartamentEntity[]>{
        return await this.departamentRepository.find();
    }
}