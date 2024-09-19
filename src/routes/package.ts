import express, { Router } from "express";
import { getDownloadsCount } from "../controllers/countControllers";

const router: Router = express.Router();

// Get Downloads Count for NPM Package
router.get('/', getDownloadsCount)

export default router;