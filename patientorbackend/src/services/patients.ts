import patientsEntries from "../../data/patients"
import { NonSensitivePatient, Patient } from "../../types"

function getEntries(): Patient[] {
  return patientsEntries
}
function getNonSensitiveEntries(): NonSensitivePatient[] {
  return patientsEntries.map(entry => {
    const {ssn, ...newEntry} = entry
    return newEntry
  })
}

export default {
  getEntries, getNonSensitiveEntries
}
