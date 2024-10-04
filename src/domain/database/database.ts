import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import { DepartamentEntity } from "../entity/departament.entity";
import { AppointmentEntity } from "../entity/appointment.entity";
import { envs } from "../../config/envs";


export class Database {
    private static instance: Database;
    private dataSource: DataSource;

    private constructor(){
        this.dataSource = new DataSource({
          type: 'postgres',
          host: envs.POSTGRES_HOST,
          port: 5432,
          username: envs.POSTGRES_USER,
          password: envs.POSTGRES_PASSWORD,
          database: envs.POSTGRES_DB,
          entities:[DepartamentEntity, AppointmentEntity],
          synchronize: false,
          logging: false,
          });
    };

    public static getInstance(): Database{
        if(!Database.instance){
            Database.instance = new Database();
        }
        return Database.instance;
    };

    public async initialize(): Promise<void> {
        try {
          await this.dataSource.initialize();
          console.log(`Connection database success...`)
        } catch (error) {
          console.error(`Error connection database ${error}`)
          throw error;
        }
      };
    
      public getDataSource(): DataSource {
        return this.dataSource;
      };
    
      public getRepository<Entity extends ObjectLiteral>(entity: EntityTarget<Entity>): Repository<Entity> {
        return this.dataSource.getRepository(entity);
      }
}