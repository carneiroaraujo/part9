import { EntryFormValues } from "../../../types"
import HealthCheckForm from "./HealthCheckForm"
import OccupationalHealthcareForm from "./OccupationalHealthcareForm"
import HospitalForm from "./Hospital"
interface Props {
  onSubmit(object:EntryFormValues):void
}
export default function EntryForm({onSubmit}:Props) {
  return (
    <div>
      <HealthCheckForm onSubmit={onSubmit}/>
      <OccupationalHealthcareForm onSubmit={onSubmit}/>
      <HospitalForm onSubmit={onSubmit}/>
    </div>
  )
}