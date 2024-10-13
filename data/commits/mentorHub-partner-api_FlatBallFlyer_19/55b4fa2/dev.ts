import config from './config/Config';
    constructor(mongoIO: MongoIO) {
        const configController = new ConfigController();
        const port = config.getPort();
    const mongo = new MongoIO();
    const server = new Server(mongo);