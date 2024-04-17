import express from "express"
import { GetData, insert } from "../controllers/controller.js"

const router = express.Router()

router.post("/Get",insert)
router.post("/getData",GetData)

export default router