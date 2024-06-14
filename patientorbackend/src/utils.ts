import { NewPatient, Gender, NewEntry, BaseEntry, HospitalEntry, OccupationalHealthcareEntry, HealthCheckRating, Diagnosis } from "../src/types";

function isNumber(param: unknown): param is number {
  return !isNaN(Number(param))
}
function isString(param: unknown): param is string {
  return typeof param === "string" || param instanceof String;
}
function isDate(param: string) {
  return Boolean(Date.parse(param));
}
function isGender(param: string) {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
}
function enumIncludes() {
  enum hi {
    hi = "hi"
  }
  return hi
}
function isHealthCheckRating(param: number): param is HealthCheckRating {
  return Object.values(HealthCheckRating).includes(param)

}
function parseString(param: unknown) {
  if (!param || !isString(param)) {
    throw new Error("Invalid string")
  }
  return param
}
function parseDate(date: unknown) {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date")
  }
  return date
}
function parseSpecialist(specialist: unknown) {
  try {
    return parseString(specialist)
  } catch {
    throw new Error("Incorrect or missing specialist")
  }

}
function parseDescription(description: unknown) {
  try {
    return parseString(description)
  } catch {
    throw new Error("Incorrect or missing description")
  }

}
function parseName(name: unknown) {
  if (!name || !isString(name)) {
    throw new Error("Incorrect or missing name");
  }
  return name;
}
function parseDateOfBirth(date: unknown) {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date of birth");
  }
  return date;
}
function parseSsn(ssn: unknown) {
  if (!ssn || !isString(ssn)) {
    throw new Error("Incorrect or missing ssn");
  }
  return ssn;
}
function parseOccupation(occupation: unknown) {
  if (!occupation || !isString(occupation)) {
    throw new Error("Incorrect or missing occupation");
  }
  return occupation;
}
function parseGender(gender: unknown) {
  if (!gender || !isString(gender) || !isGender(gender)) {
    throw new Error("Incorrect or missing gender");
  }
  return gender;
}
function parseEmployerName(employerName: unknown) {
  try {
    return parseString(employerName)
  } catch {
    throw new Error("Incorrect or missing employer name")
  }
} 
const parseDiagnosisCodes = (object: unknown): Array<Diagnosis['code']> =>  {
  if (!object || typeof object !== 'object' || !('diagnosisCodes' in object)) {
    // we will just trust the data to be in correct form
    return [] as Array<Diagnosis['code']>;
  }

  return object.diagnosisCodes as Array<Diagnosis['code']>;
};
// function parseEntryType(type: unknown):  {
//   if (!type || !isString(type) || !["HealthCheck", "OccupationalHealthcare", "Hospital"].includes(type)) {
//     throw new Error("Incorrect or missing type")
//   }
//   return type
// }
function parseHealthCheckRating(healthCheckRating: unknown) {
  if (!isNumber(healthCheckRating) || !(Object.values(HealthCheckRating).includes(healthCheckRating))) {
    throw new Error("Incorrect or missing healthCheckRating ")
  }
  return healthCheckRating
}
function parseDischarge(discharge: unknown) {
  if (!discharge || typeof discharge !== "object" || ! ("criteria" in discharge) || ! ("date" in discharge) || !isString(discharge.criteria) || !isString(discharge.date)) {
    throw new Error("")
  }
  return {
    criteria: discharge.criteria,
    date: discharge.date,
  }
}
export function parseNewPatient(object: unknown): NewPatient {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  } else if (
    !(
      "name" in object &&
      "dateOfBirth" in object &&
      "ssn" in object &&
      "gender" in object &&
      "occupation" in object
    )
  ) {
    throw new Error("Some fields are missing");
  } else {
    return {
      name: parseName(object.name),
      dateOfBirth: parseDateOfBirth(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
      entries: [],
    };
  }
}

function parseHealthCheck(object: object): NewEntry {
    if (!(
    "date" in object &&
    "type" in object &&
    "specialist" in object &&
    "description" in object &&
    "healthCheckRating" in object 
    
  )) {
    throw new Error("Some fields are missing")
  }
  return {
    date: parseDate(object.date),
    type: "HealthCheck",
    specialist: parseSpecialist(object.specialist),
    description: parseDescription(object.description),
    healthCheckRating: parseHealthCheckRating(object.healthCheckRating),
    diagnosisCodes: parseDiagnosisCodes(object)
  }

}
function parseOccupationalHealthcare(object: object): NewEntry {
    if (!(
  "date" in object &&
  "type" in object &&
  "specialist" in object &&
  "description" in object &&
  "employerName" in object
)) {
  throw new Error("Some fields are missing")
}
return {
  date: parseDate(object.date),
  type: "OccupationalHealthcare",
  specialist: parseSpecialist(object.specialist),
  description: parseDescription(object.description),
  employerName: parseEmployerName(object.employerName),
  diagnosisCodes: parseDiagnosisCodes(object)

}
}
function parseHospital(object: object): NewEntry {
  if (!(
    "date" in object &&
    "type" in object &&
    "specialist" in object &&
    "description" in object &&
    "discharge" in object 
  )) {
    throw new Error("Some fields are missing")
  }
  return {
    date: parseDate(object.date),
    type: "Hospital",
    specialist: parseSpecialist(object.specialist),
    description: parseDescription(object.description),
    discharge: parseDischarge(object.discharge),
    diagnosisCodes: parseDiagnosisCodes(object)
  }
}
function assertNever(value: never): never {
  throw new Error(
    `Unhandled discrimanted union member: ${JSON.stringify(value)}`
  )
}
export function parseNewEntry(object: unknown) {
  if (!object || typeof object !== "object" || !("type" in object)) {
    throw new Error("Incorrect or missing data");
  }

  switch (object.type) {
    case "HealthCheck":
      return parseHealthCheck(object)
    case "OccupationalHealthcare":
      return parseOccupationalHealthcare(object)
    case "Hospital":
      return parseHospital(object)
    default: 
      throw new Error(
        `Unhandled discrimanted union member: ${JSON.stringify(object)}`
      );
      break;

  }
}




// export function parseNewEntry(object: unknown): NewEntry {
//   if (!object || typeof object !== "object") {
//     throw new Error("Incorrect or missing data");
//   }
  
//   // const requiredFields =  ["id", "date", "type", "specialist", "description"]
//   if (!(
//     "date" in object &&
//     "type" in object &&
//     "specialist" in object &&
//     "description" in object
//     // "diagnosisCodes" in object 
//   )) {
//     throw new Error("Some fields are missing")
//   }

//   // const entry:NewEntry = object

//   const newEntry = {
//     date: parseDate(object.date),
//     type: parseEntryType(object.type),
//     specialist: parseSpecialist(object.specialist),
//     description: parseDescription(object.description),
//   }

//   switch (newEntry.type) {
//     case "HealthCheck":
      
//       if (!("healthCheckRating" in object)) {
//         throw new Error("Some fields are missing")
//       }
//       return {
//         ...newEntry,
//         discharge: parseDischarge(object)
//       }
//     case "OccupationalHealthcare":
//       if (!("OccupationalHealthcare" in object)) {
//         throw new Error("Some fields are missing")
//       }
//     case "Hospital":
//       if (!("discharge" in object)) {
//         throw new Error("Some fields are missing")
//       }
//       return {
//         ...newEntry,
//         discharge: parseDischarge(object.discharge)
//       }
//   }

//   // return newEntry




// }
