import { useState } from "react";
import { NewDiary, Visibility, Weather } from "../types";

interface Props {
  onSubmit(data: NewDiary): void;
  warning: string;

}
function useField(type = "text") {
  const [value, setValue] = useState("");
  function onChange(event: React.FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }
  
  return {
    value, onChange, type
  }
}

export function DiaryForm({ onSubmit, warning }: Props) {
  const date = useField("date")
  const [visibility, setVisibility] = useState("")
  const [weather, setWeather] = useState("")
  const comment = useField()

  
  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    onSubmit({
      date: date.value,
      visibility: visibility,
      weather: weather,
      comment: comment.value,
    })
  }

  const errorStyle = {
    color: "red",
    display: warning ? "block" : "none"
  }

  return (
    <div>
      {/* <input type="date" /> */}
      <h2>Add new entry</h2>
      <div style={errorStyle}>{warning}</div>
      <form onSubmit={handleSubmit}>
        <div>date: <input {...date} /></div>

        <div>visibility:
        Great <input name="visibility" type="radio" onChange={() => {setVisibility(Visibility.Great)}}/> 
        Good <input name="visibility" type="radio" onChange={() => {setVisibility(Visibility.Good)}}/> 
        Ok <input name="visibility" type="radio" onChange={() => {setVisibility(Visibility.Ok)}}/> 
        Poor <input name="visibility" type="radio" onChange={() => {setVisibility(Visibility.Poor)}}/> 
        </div>
        <div>weather:
        Sunny <input name="weather" type="radio" onChange={() => {setWeather(Weather.Sunny)}}/>
        Rainy <input name="weather" type="radio" onChange={() => {setWeather(Weather.Rainy)}}/>
        Cloudy <input name="weather" type="radio" onChange={() => {setWeather(Weather.Cloudy)}}/>
        Stormy <input name="weather" type="radio" onChange={() => {setWeather(Weather.Stormy)}}/>
        Windy <input name="weather" type="radio" onChange={() => {setWeather(Weather.Windy)}}/>
        </div>
        <div>comment: <input {...comment} /></div>
        <button type="submit">add</button>
      </form>

    </div>
  )
}