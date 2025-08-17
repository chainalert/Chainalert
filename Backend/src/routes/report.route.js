import { Router } from "express";
import { getProfile, submitReport } from "../controllers/user.controller.js";

const router = Router()

router.post("/report", submitReport)
router.get("/profile/:address", getProfile)


export default router