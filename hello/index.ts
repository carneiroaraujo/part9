import express from "express"
import { calculateBmi } from "./bmiCalculator"
import { calculateExercises } from "./exerciseCalculator"
const app = express()
app.use(express.json())
app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!")
})

app.get("/bmi", (req, res) => {
  const height:number = Number(req.query.height)
  const weight:number = Number(req.query.weight)
  
  if (isNaN(height) || isNaN(weight)) {
    res.send({error: "missing of malformatted parameters"})
  } else {
 
    res.send({
      bmi: calculateBmi(height, weight),
      height, 
      weight
    })
  }

  
  // res.send(calculateBmi(height, weight))
})
app.post("/exercises", (req, res) => {
  
  interface InputData {
    daily_exercises: number[],
    target: number
  }
  function parse(): InputData {
    if (!req.body.target || !req.body.daily_exercises) {
      throw new Error("missing parameters")
    }

    const target = Number(req.body.target)
    const daily_exercises = req.body.daily_exercises.map((element:any) => {
      const value = Number(element)
      if (isNaN(value)) {
        throw new Error("malformatted parameters")
      } else {
        return value
      }
    })

    if (!daily_exercises.length) throw new Error("missing parameters")
    if (isNaN(target)) throw new Error("malformatted parameters")

    return {
      daily_exercises,
      target
    }
  } 
  try {
    const {daily_exercises, target} = parse()
    res.json(calculateExercises(daily_exercises, target))
  } catch (error) {
    res.status(400).send({error: error.message})
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log("Server running on port "+PORT);
  
})