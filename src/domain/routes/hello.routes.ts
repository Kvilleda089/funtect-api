import { Router } from "express";
import { HelloController } from '../controllers/hello.controller';


const routerHello = Router();
const helloController = new HelloController();

routerHello.get('/test', helloController.getHello);

export default routerHello;