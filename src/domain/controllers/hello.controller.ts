import { Request, Response } from 'express';
import { HelloService } from '../service/hello.service';


export class HelloController {
    private helloService: HelloService;
    constructor(){
        this.helloService = new HelloService()
    }

    public getHello = (request: Request, response: Response): void =>{
        const message = this.helloService.getMessage();
        response.status(200).send({message

        })
    }
}