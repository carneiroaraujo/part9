import axios from "axios";
import { EntryFormValues } from "../types";

async function create(object:EntryFormValues, patientId:string) {
  return axios.post(`/api/patients/${patientId}/entries`, object).then(r => r.data)
}

export default {
  create
}