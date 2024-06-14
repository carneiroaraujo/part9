import { useState } from "react"
import { useField } from "./utils"
import { EntryFormValues, HealthCheckRating } from "../../../types"
import entriesService from "../../../services/entries"

interface Props {
  onSubmit(object:EntryFormValues):void
}

export default function HealthCheckForm({onSubmit}: Props) {
  const date = useField({type:"date"})
  const specialist = useField()
  const description = useField()
  const diagnosisCode = useField()
  const [diagnosisCodes, setDiagnosisCodes] = useState<string[]>([])
  const [healthCheckRating, setHealthCheckRating] = useState<number>(0)

  function handleSubmit(event:React.SyntheticEvent) {
    event.preventDefault()
    onSubmit({
      type: "HealthCheck",
      diagnosisCodes: diagnosisCodes,
      date: date.value,
      specialist: specialist.value,
      description: description.value,
      healthCheckRating: healthCheckRating,
    });
    
  }
  function appendDiagnosisCode() {
    setDiagnosisCodes(diagnosisCodes.concat(diagnosisCode.value))
  }

  return (
    <div>
      <h2>New HealthCheck entry</h2>
      <form onSubmit={handleSubmit}>
      <div>date: <input {...date} /></div>
      <div>specialist: <input {...specialist} /></div>
      <div>description: <input {...description} /></div>
      <div>diagnosis code: <input {...diagnosisCode} /> 
      <button type="button" onClick={appendDiagnosisCode}>append</button>
      {diagnosisCodes.join(", ")}
      </div>
      <div>
        health check rating:
        Healthy <input name="weather" type="radio" onChange={() => setHealthCheckRating(HealthCheckRating.Healthy)}/>
        LowRisk <input name="weather" type="radio" onChange={() => setHealthCheckRating(HealthCheckRating.LowRisk)}/>
        HighRisk <input name="weather" type="radio" onChange={() => setHealthCheckRating(HealthCheckRating.HighRisk)}/>
        Critical <input name="weather" type="radio" onChange={() => setHealthCheckRating(HealthCheckRating.CriticalRisk)}/>
      </div>
      <button type="submit">add</button>
      </form>
    </div>
  )
}