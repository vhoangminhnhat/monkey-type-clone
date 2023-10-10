import { Pool, Client } from "pg";

let pool = new Pool({
    user: "postgres",
    host: '127.0.0.1',
    database: 'monkey-type',
    port: 5432,
    password: 'Huynhi123'
})

// let conn: any;

// if(!conn) {
//     conn = new Pool({
//         user: process.env.PGSQL_USER,
//         password: process.env.PGSQL_PASSWORD,
//         host: process.env.PGSQL_HOST,
//         port: process.env.PGSQL_PORT,
//         database: process.env.PGSQL_DATABASE
//     })
// };

export {pool, Client};