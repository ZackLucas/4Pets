import { ConfigureApplication } from './app';

class Server {
    static start(): void {
        const application = new ConfigureApplication(3333);
        application.init();
        application.start();
    }
}

Server.start();