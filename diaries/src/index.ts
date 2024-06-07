const express = require("express")
const app = express()
import diaryRouter from "./routes/diaries"

app.use("/api/diaries", diaryRouter)

app.get("/ping", (_req:any, res:any) => {
  res.send("pong")
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})