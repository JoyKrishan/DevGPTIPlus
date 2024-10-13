import { CollectionVersionDoc } from "../models/CollectionVersionModel"
import { existsSync, readFileSync } from "fs";
import { join } from 'path';

interface ConfigItem {
    name: string;
    value: string;
    from: string;
}

export class Config {
    private static instance: Config; // Singleton 

    versions: CollectionVersionDoc[] = [];
    apiVersion: string = "";
    private port: number = 8084;
    private connectionString: string = "";
    private dbName: string = "";
    private partnerCollectionName: string = "";
    private peopleCollectionName: string = "";
    private versionCollectionName: string = "";
    private enumeratorsCollectionName: string = "";
        this.initialize();
    }

    public initialize() {
        this.configItems = [];
        this.versions = [];
        this.enumerators = {};
        console.info("Configuration Initilized");
        this.configItems.push({
            name: name,
            value: isSecret ? "secret" : value,
            from: from
    /**
     * Singleton Constructor
     */
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    public getPort(): number {
}

// Create a singleton instance of Config and export it
const config = Config.getInstance();
export default config;