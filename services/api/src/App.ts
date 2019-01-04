import * as express from 'express'
import * as cors from 'cors'

class App {
    public express: any;

    constructor() {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes(): void {
        const router = express.Router()
        
        router.get('/', (req: express.Request, res: express.Response) => {
            res.send({data: 'Hello World!'})
        });

        this.express.use(cors());
        this.express.options('*', cors());

        this.express.use('/', router);
    }
}

export default new App().express