export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface BaseEntry {
  id: string;
  date: string;
  type: string;
  specialist: string;
  description: string;
  diagnosisCodes?: Diagnosis["code"][];
}

export enum HealthCheckRating {
  Healthy = 0,
  LowRisk = 1,
  HighRisk = 2,
  CriticalRIsk = 3,
}

export interface HealthCheckEntry extends BaseEntry{
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {startDate: string, endDate: string};
}

export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: {date: string, criteria:string};
}

export type Entry = HealthCheckEntry | OccupationalHealthcareEntry | HospitalEntry

export interface Patient {
  id : string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[];
}

export type NewPatient = Omit<Patient, "id">;
type UnionOmit<T, K extends string | number | symbol> = T extends unknown ? Omit<T, K> : never;
export type NewEntry = UnionOmit<Entry, "id">;

export type NonSensitivePatient = Omit<Patient, 'ssn' | "entries">;

export interface Diagnosis {
  code: string,
  name: string,
  latin?: string,
}
