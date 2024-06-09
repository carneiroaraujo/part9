import { NewPatient, Gender } from "../types";

function isString(param: unknown): param is string{
  return typeof param === "string" || param instanceof String
}
function isDate(param: string) {
  return Boolean(Date.parse(param))
}
function isGender(param: string) {
  return Object.values(Gender).map(v => v.toString()).includes(param)
}
function parseName(name: unknown) {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name")
  }
  return name
}
function parseDateOfBirth(date: unknown) {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date of birth")
  }
  return date
}
function parseSsn(ssn: unknown) {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn")
  }
  return ssn
}
function parseOccupation(occupation: unknown) {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing occupation")
  }
  return occupation
}
function parseGender(gender: unknown) {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender")
  }
  return gender
}

export function parseNewPatient(object:unknown): NewPatient {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data")
  } else if (!("name" in object &&"dateOfBirth" in object &&"ssn" in object &&"gender" in object &&"occupation" in object)) {
    throw new Error("Some fields are missing")
  } else {
     return {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
     }
  }
  

}