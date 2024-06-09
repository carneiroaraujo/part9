import { coursePart } from "../types"
interface Props {
  courseParts: coursePart[]
}
export function Content({courseParts}: Props) {
  return (
    <>
    {
      courseParts.map(part => (
        <p>{part.name} {part.exerciseCount}</p>
      ))
    }
    </>
  )
}