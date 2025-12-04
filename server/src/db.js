import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
    user: "iamsayon",
    host: "localhost",
    database: "upi_sentinel_db",
    password: process.env.DB_PASSWORD,
    port: 5432,
});
