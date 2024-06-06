export function calculateBmi(height:number, mass:number): string {
  const bmi:number = mass/(height/100)**2
  
  const statuses:string[] = [
  "Undeweight (Severe thinness)",
  "Undeweight (Moderate thinness)",
  "Undeweight (Mild thinness)",
  "Normal range",
  "Overweight (Pre-obese)",
  "Obese (Class I)",
  "Obese (Class II)",
  "Obese (Class III)"
]
  const bounds:number[] = [
    16,
  16.9,
  18.4,
  24.9,
  29.9,
  34.9,
  39.9
]
  for (let i=0; i<bounds.length; i++) {
    if (bmi < bounds[i]) {
      return statuses[i]
    }
  }
  return statuses[statuses.length-1]
}

// import {parseArgs} from "./utils"

// try {
//   const [a, b] = parseArgs(process.argv)
//   console.log(calculateBmi(a, b))
  
// } catch (error) {
//   console.log("Something went wrong:", error.message);
  
// }
