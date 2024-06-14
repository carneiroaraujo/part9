import { HealthCheckEntry } from "../../types"
interface Props {
  entry: HealthCheckEntry
}
export default function HealthCheck({entry}:Props) {
  return (
    <p>
      {entry.date}
      <br />
      {entry.description}
      <br />
      diagnose by {entry.specialist}
    </p>
  )
}