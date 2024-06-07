import diagnosesEntries from "../../data/diagnoses"
import { Diagnosis } from "../../types"

function getDiagnoses(): Diagnosis[] {
  return diagnosesEntries
}

export default {
  getDiagnoses
}
