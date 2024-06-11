import { Diary } from "../types";

interface Props {
  diaries: Diary[];
}


export function List({diaries}:Props) {
  return (
    <div>
      <h2>Diary entries</h2>
      {
        diaries.map(diary => (
          <div key={diary.id}>
            <h3>{diary.date}</h3>
            visibility: {diary.visibility} <br />
            weather: {diary.weather}
          </div>
        ))
      }
    </div>
  )
}