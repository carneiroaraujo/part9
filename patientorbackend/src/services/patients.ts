import patientsEntries from "../../data/patients"
import { Entry, NewEntry, NewPatient, NonSensitivePatient, Patient } from "../types"
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
function addNewPatient(object:NewPatient): Patient {
  const entry = {...object, id: uuid()}
  patientsEntries.push(entry)
  return entry
}

function getById(id:string) {
  return patientsEntries.find(patient => patient.id === id)
}
function addNewEntry(object: NewEntry, userId:string): Entry {
  const patient = getById(userId)
  if (!patient) {
    throw new Error()
  }
  const entry = {...object, id: uuid()}
  patient.entries.push(entry)
  return entry
}
export default {
  getEntries, getById, getNonSensitiveEntries, addNewEntry, addNewPatient
}
