import express, {Application} from "express";
import { envs } from "../config/envs";
import routerHello from "../domain/routes/hello.routes";
import { Database } from "../domain/database/database";
import departementRouter from "../domain/routes/departament.routes";
import cors from "cors";
import appointmentRouter from "../domain/routes/appointment.routes";
import contactRouter from "../domain/routes/contact.routes";


export class Server {
    
    private app: Application;
    private port: number;
    private dataBase: Database;
    constructor(){
        this.app = express();
        this.port = envs.PORT;
        this.dataBase = Database.getInstance();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.json());
    };

    private routes(): void {
        const url = '/funtect-api';
        this.app.use(cors());
        this.app.use(url, routerHello);
        this.app.use(url, departementRouter);
        this.app.use(url, appointmentRouter);
        this.app.use(url, contactRouter);
    };

    public async connectionDatabase(): Promise<void>{
        try {
            await this.dataBase.initialize();
            console.log(`Connection database success`)
        } catch (error) {
            console.log(`Error connection database ${error}`);
            throw new Error('Exiting application due to database connection failure');
        }
    }

    public async start(): Promise<void>{
        await this.connectionDatabase();
        this.app.listen(this.port, ()=>{
            console.log(`Server Listening on http://localhost:${this.port} `);
        });
    };


}