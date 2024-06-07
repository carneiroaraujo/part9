import express from "express"
import patientsService from "../services/patients"
const router = express.Router()

router.get("/", (_req:any, res:any) => {
  
  res.send(patientsService.getNonSensitiveEntries())
})

export default router