// import { Patient } from "../../types";

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import patientService from "../../services/patients"
import entryService from "../../services/entries"
import { EntryFormValues, Patient } from "../../types"
import EntryDetails from "./EntryDetails"
import EntryForm from "./EntryForm"
import axios from "axios"
// interface Props {
//   patient: Patient
// }
export default function PatientDetails() {
  const { id } = useParams()
  const [patientDetails, setPatientDetails] = useState<Patient | null>(null)
  const [warning, setWarning] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPatientDetails() {
      if (id) {
        setPatientDetails(await patientService.getById(id));
      }
    }
    fetchPatientDetails()
  }, [])
  if (!patientDetails) {
    return (
      <div>
        Loading patient details
      </div>
    )
  }

  function handleEntrySubmit(object: EntryFormValues) {
    if (patientDetails){
      try{
        entryService.create(object, patientDetails.id).catch(error => {
          if (axios.isAxiosError(error)) {
            setWarning(error.response?.data.error)
            setTimeout(() => {
              setWarning(null)
            }, 5000);
          }
        })

      } catch (error) {
        if (error instanceof Error) {
          setWarning(error.message)
          setTimeout(() => {
            setWarning(null)
          }, 5000);
        }
      }
    }
  }
  const warningStyle = {
    color: "red"
  }

  return (
    <div>
      <div style={warningStyle}>
        {warning}
      </div>
      <h2>{patientDetails.name}</h2>
      <div>
        ssh: {patientDetails.ssn} <br />
        occupation: {patientDetails.occupation}
      </div>

      <EntryForm onSubmit={handleEntrySubmit}/>
      <h3>entries</h3>
      {
        patientDetails.entries.map(entry => (
          <EntryDetails key={entry.id} entry={entry}/>
          
        ))
      }
    </div>
  )
}