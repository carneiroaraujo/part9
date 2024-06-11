// import { Patient } from "../../types";

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import patientService from "../../services/patients"
import { Patient } from "../../types"

// interface Props {
//   patient: Patient
// }
export default function PatientDetails() {
  const {id} = useParams()
  const [patientDetails, setPatientDetails] = useState<Patient | null>(null)

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
  return (
    <div>
      <h2>{patientDetails.name}</h2>
      ssh: {patientDetails.ssn} <br />
      occupation: {patientDetails.occupation}
    </div>
  )
}