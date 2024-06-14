import { OccupationalHealthcareEntry } from "../../types"
interface Props {
  entry: OccupationalHealthcareEntry
}
export default function OccupationalHealthcare({entry}:Props) {
  return (
    <p>
      {entry.date} | {entry.employerName}
      <br />
      <i>{entry.description}</i>
      <br />
      diagnose by {entry.specialist}
      
    </p>
  )
}