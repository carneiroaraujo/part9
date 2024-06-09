import { NewDiaryEntry, Visibility, Weather } from "./types";
function isString(text: unknown): text is string  {
  return typeof text === "string" || text instanceof String
}
function isDate(date:string): boolean {
  return Boolean(Date.parse(date))
}
function isWeather(param: string): param is Weather {
  return Object.values(Weather).map(v => v.toString()).includes(param)
}
function isVisibility(param: string): param is Visibility {
  return Object.values(Visibility).map(v => v.toString()).includes(param)
}
function parseComment(comment: unknown) {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment")
  }
  return comment
}
function parseDate(date: unknown): string {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: "+ date)
  }
  return date
}
function parseWeather(weather: unknown) {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather: "+ weather)
  }
  return weather
}
function parseVisibility(visibility: unknown) {
  if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility: "+visibility)
  }
  return visibility
}
export function toNewDiaryEntry(object:unknown): NewDiaryEntry {

  if (!object || typeof object !== 'object') {
    throw new Error("Incorrect of missing data")
  }
  if ( "comment" in object && "date" in object && "weather" in object && "visibility" in object ) {
    const newEntry: NewDiaryEntry = {
      date: parseDate(object.date),
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
      comment: parseComment(object.comment),
    } 
    return newEntry
  }
  
  throw new Error("Incorrect data: some fields are missing")

}