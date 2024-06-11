import express from "express"
import diaryService from "../services/diaryService"
import { toNewDiaryEntry } from "../utils"
const router = express.Router()

router.get("/", (_req:any, res:any) => {
  res.send(diaryService.getEntries())
})
router.get("/:id", (req:any, res:any) => {
  const entry = diaryService.findById(Number(req.params.id))
  if (entry) {
    res.json(entry)
  } else {
    res.sendStatus(404)
  }
})
router.post("/", (req:any, res:any) => {
  try {
    const addedDiary = diaryService.addEntry(toNewDiaryEntry(req.body))
    res.json(addedDiary)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).send({error: error.message})

    }
  }

})

export default router