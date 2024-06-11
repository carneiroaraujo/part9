import { useEffect, useState } from "react"
import diariesService from "./services/diaries"
import { Diary, NewDiary } from "./types"
import { List } from "./components/List"
import { DiaryForm } from "./components/DiaryForm"
import { AxiosError } from "axios"


function App() {
  const [diaries, setDiaries] = useState<Diary[]>([])
  const [warning, setWarning] = useState("")

  function showWarning(content:string) {
    setWarning(content)
    setTimeout(() => {
      setWarning("")
    }, 5000);
  }
  function handleSubmit(data:NewDiary) {
    diariesService.create(data)
    .then(r => {
      setDiaries(diaries.concat(r))
    })
    .catch(error => {
      if (error instanceof AxiosError && error.response) {
        showWarning(error.response.data.error);
      }
    })
    
  }
  useEffect(() => {
    diariesService.getAll().then(r => {
      setDiaries(r)
    })
  }, [])
  return (
    <div>
      <DiaryForm onSubmit={handleSubmit} warning={warning}/>
      <List diaries={diaries}/>
    </div>
  )
}

export default App
