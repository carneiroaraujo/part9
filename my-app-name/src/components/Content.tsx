import { CoursePart } from "../types"
import {Part} from "./Part"
interface Props {
  courseParts: CoursePart[]
}

export function Content({courseParts}: Props) {
  return (
    <>
    {
      courseParts.map(part => (
        <div>
          <Part coursePart={part}/>
          
        </div>
      ))
    }
    {/* {
      courseParts.map(part => (
        <p>{part.name} {part.exerciseCount}</p>
      ))
    } */}
    </>
  )
}