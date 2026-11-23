import dotenv from 'dotenv';
import path from 'path';
import { Connection } from 'pg';

dotenv.config({
    path: path.join(process.cwd(),".env")
})

const config = {
    port : process.env.PORT,
    connection_string: process.env.DATABASE_URL as string,
    token : process.env.TOKEN as string
}

export default config