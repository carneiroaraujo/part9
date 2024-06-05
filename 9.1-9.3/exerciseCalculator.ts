
interface Result {
  periodLength:number,
  trainingDays:number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

function calculateExercises(days: number[], target:number): Result {
  
  const periodLength:number = days.length

  let trainingDays:number = 0
  let average:number = 0
  days.forEach(value => {
    if (value) {
      trainingDays ++
    }
    average += value
  })
  average = average/periodLength

  const rating:number = Math.trunc(average/target*3)
  let ratingDescription:string

  if (rating < 2) {
    ratingDescription = "you're lacking strength of will"
  } else if (rating < 3) {
    ratingDescription = "you did well, but there is still room for improvements"
  } else {
    ratingDescription = "you've finally achieved the ultimate boon"
  }
 
  return ({
    periodLength,
    trainingDays,
    success: average >= target,
    rating: rating > 3 ? 3 : rating,
    ratingDescription,
    target,
    average
  })
}

import { parseArgs } from "./utils"

try {
  const [target, ...days] = parseArgs(process.argv)
  console.log(calculateExercises(days, target))
} catch (error) {
  console.log("Something went wrong: " + error.message);
  
}
