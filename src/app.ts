import './util/module-alias';
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import { Server } from "http";
import Router from './routes';

export class ConfigureApplication {
    private server?: Server;

    constructor(
        private port = 3000, 
        public app = express(), 
        private corsOption = { 
            origin: 'https://the4pets.herokuapp.com', 
            optionsSuccessStatus: 200 
        }) { }

    public init(): void {
        this.setupExpress();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        this.app.use(Router);
    }

    private setupExpress(): void {
        this.app.use(cors(this.corsOption))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }

    public start(): void {
        this.server = this.app.listen(process.env.port || this.port, () => {
            console.log(`Server is running...`)
        })
    }
}