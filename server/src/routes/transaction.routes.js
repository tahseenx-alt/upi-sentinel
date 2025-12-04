import express from "express";
import { upload } from "../middlewares/upload.middlewares.js";
import { testUploadHandler } from "../controllers/transaction.controllers.js";

const router = express.Router();

// TEST ROUTE
router.post("/upload", upload.single("file"), testUploadHandler);

export default router;
