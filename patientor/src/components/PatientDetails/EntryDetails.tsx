import { Entry } from "../../types"

import Hospital from "./Hospital"
import OccupationalHealthcare from "./OccupationalHealthcare"
import HealthCheck from "./HealthCheck"
interface Props {
  entry: Entry
}

export default function EntryDetails({entry}:Props) {
  switch (entry.type) {
    case "Hospital":
      return <Hospital entry={entry}/>
    case "OccupationalHealthcare":
      return <OccupationalHealthcare entry={entry}/>
    case "HealthCheck":
      return <HealthCheck entry={entry}/>
  }
  
}