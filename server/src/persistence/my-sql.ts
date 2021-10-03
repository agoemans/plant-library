import { CalendarModel, CompanionsModel, RotationModel } from '../models';
import {Repository} from "./repository";

const mysql = require('mysql');

export class MySqlClient implements Repository {
    connector = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DBUSER,
        password : process.env.DBPASSWORD
    });

    constructor() {
        this.connector.connect((err: any) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query = ( sql: string, args?: any ): Promise<unknown> => {
        return new Promise( ( resolve: any, reject: any ) => {
            this.connector.query( sql, args, ( err: any, rows: any ) => {
                if ( err ) {
                    reject( err );
                }
                resolve( rows );
            } );
        } );
    };

    getCalendarItems = async () => {
       // todo implement
        const query = null;

        try {
            const calendarResult: any = await this.query(query);

            return [];

        } catch(err: any) {
            throw new Error('Could not get all Calendar Items: ' + err );
        }
    };

    getCompanionPlants = async () => {
        // todo implement
        const query = null;

        try {
            const compantionResult: any = await this.query(query);

            return [];

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getCropRotationList = async () => {
        // todo implement
        const query = null;

        try {
            const rotationResult: any = await this.query(query);

            return [];

        } catch(err: any) {
            throw new Error('Could not get all crop rotation plants: ' + err );
        }
    };

}