import axios from "axios"
import { Diary, NewDiary } from "../types"
const baseUrl = "/api/diaries/"
async function getAll() {
  console.log("all");
  return axios.get<Diary[]>(baseUrl).then(r => r.data)
}
async function create(data:NewDiary) {
  return axios.post<Diary>(baseUrl, data).then(r => r.data)
}
export default {
  getAll,
  create
}