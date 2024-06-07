import diaries from "../../data/entries"
import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

export function getEntries(): DiaryEntry[] {
  return diaries;
}

export function addDiary() {
  return null;
}

export function getNonSensitiveEntries(): NonSensitiveDiaryEntry[] {
  return diaries.map(({id, date, weather, visibility}) => ({id, date, weather, visibility})) 
} 

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries
}