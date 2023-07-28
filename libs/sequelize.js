import { appConfig } from '../config/config.js';
import { Sequelize } from "sequelize";

const USER = encodeURIComponent(appConfig.dbUser);
const PASSWORD = encodeURIComponent(appConfig.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${appConfig.dbHost}:${appConfig.dbPort}/${appConfig.dbName}`;

const sequelizeClient = new Sequelize(URI, {
    dialect:'postgres',
});

export {sequelizeClient};