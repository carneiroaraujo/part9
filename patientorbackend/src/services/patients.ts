import patientsEntries from "../../data/patients"
import { NewPatient, NonSensitivePatient, Patient } from "../../types"
import {v1 as uuid} from "uuid"
function getEntries(): Patient[] {
  return patientsEntries
}
function getNonSensitiveEntries(): NonSensitivePatient[] {
  return patientsEntries.map(entry => {
    const {ssn, ...newEntry} = entry
    return newEntry
  })
}
function addEntry(object:NewPatient): Patient {
  const entry = {...object, id: uuid()}
  patientsEntries.push(entry)
  return entry
}
function getById(id:string) {
  return patientsEntries.find(patient => patient.id === id)
}
export default {
  getEntries, getById, getNonSensitiveEntries, addEntry
}
