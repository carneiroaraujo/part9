import express from "express"
import cors from "cors"
import patientsRouter from "./routes/patients"
import diagnosesRouter from "./routes/diagnoses"

const app = express()
app.use(cors())

app.use("/api/patients", patientsRouter)
app.use("/api/diagnoses", diagnosesRouter)
app.get("/api/ping", (_req:any, res:any) => {
  res.send("pong")
})

const PORT = 3001
app.listen(PORT, () => {

  console.log("Server connected on port ${PORT}");

})