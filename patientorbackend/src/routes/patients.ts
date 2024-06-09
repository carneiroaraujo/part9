import express from "express"
import patientsService from "../services/patients"
import {parseNewPatient} from "../utils"
const router = express.Router()

router.get("/", (_req:any, res:any) => {
  
  res.send(patientsService.getNonSensitiveEntries())
})

router.post("/", (req:any, res:any) => {
  
  try{
    const newEntry = patientsService.addEntry(parseNewPatient(req.body))
    res.status(201).json(newEntry)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({error: error.message})
    }
  }  
})

export default router