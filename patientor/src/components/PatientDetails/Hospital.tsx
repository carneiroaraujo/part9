import { HospitalEntry } from "../../types"
interface Props {
  entry: HospitalEntry
}
export default function Hospital({ entry }: Props) {
  return (
    <p>
      {entry.date}
      <br />
      {entry.description}
      <br />
      discharged at {entry.discharge.date}
      <br />
      diagnose by {entry.specialist}
    </p>
  )
}