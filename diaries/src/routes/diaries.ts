import express from "express"
import diaryService from "../services/diaryService"
const router = express.Router()

router.get("/", (_req:any, res:any) => {
  res.send(diaryService.getNonSensitiveEntries())
})

router.post("/", (_req:any, res:any) => {
  res.send("saving a diary")
})

export default router