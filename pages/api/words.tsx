import { NextApiRequest, NextApiResponse } from "next";
import {pool} from '../../lib/db';

export default async function handlerWords(req: NextApiRequest, res: NextApiResponse){
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM words');
        const users = result.rows;
        client.release();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json('Something went wrong, try again !')
    }
}