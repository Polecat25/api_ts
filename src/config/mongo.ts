import "dotenv/config"

import { connect } from "mongoose"

const NODE_ENV = process.env.NODE_ENV

async function dbconnect():Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
}

export default dbconnect;