import diaries from "../../data/entries"
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";
export function findById(id:number): DiaryEntry | undefined {
  const entry = diaries.find(diary => diary.id === id)
  return entry

}
export function getEntries(): DiaryEntry[] {
  return diaries;
}

export function addEntry(data: NewDiaryEntry) {
  const entry = {...data, id: Math.max(...diaries.map(entry=>entry.id))+1}
  diaries.push(entry)
  return entry;
}

export function getNonSensitiveEntries(): NonSensitiveDiaryEntry[] {
  return diaries.map(({id, date, weather, visibility}) => ({id, date, weather, visibility})) 
} 

export default {
  findById,
  getEntries,
  addEntry,
  getNonSensitiveEntries
}