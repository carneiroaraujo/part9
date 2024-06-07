import express from "express"
import diagnosesService from "../services/diagnoses"
const router = express.Router()

router.get("/", (_req:any, res:any) => {
  
  res.send(diagnosesService.getDiagnoses())
})

export default router