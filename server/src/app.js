import "dotenv/config";
import { pool } from "./db.js";
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});

pool.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.error("❌ PG Connection Error:", err);
    } else {
        console.log("✅ Connected to Postgres:", res.rows[0]);
    }
});

//IMPORT ROUTES
import transactionRoutes from "./routes/transaction.routes.js";

//USE ROUTES
app.use("/api/transactions", transactionRoutes);
