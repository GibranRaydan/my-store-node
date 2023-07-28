import pg from 'pg';
import { appConfig } from '../config/config.js';

const USER = encodeURIComponent(appConfig.dbUser);
const PASSWORD = encodeURIComponent(appConfig.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${appConfig.dbHost}:${appConfig.dbPort}/${appConfig.dbName}`;
    
const pool = new pg.Pool({ connectionString: URI});

export { pool };