import { CoursePart } from "../types"

interface Props {
  coursePart: CoursePart
}

export function Part({coursePart}: Props) {
  switch (coursePart.kind) {
    case ("basic"):
      return (
        <p>
          <strong>{coursePart.name} {coursePart.exerciseCount}</strong> <br />
          {coursePart.description} 
        </p>
      )
    case ("background"):
      return (
        <p>
          <strong>{coursePart.name} {coursePart.exerciseCount}</strong> <br />
          {coursePart.description} <br />
          submit to {coursePart.backgroundMaterial}
        </p>
      )
    case ("group"):
      return (
        <p>
          <strong>{coursePart.name} {coursePart.exerciseCount}</strong> <br />
          project exercises {coursePart.groupProjectCount}
        </p>
      )
    case ("requirements"):
      return (
        <p>
          <strong>{coursePart.name} {coursePart.exerciseCount}</strong> <br />
          {coursePart.description} <br />
          required skills: {coursePart.requirements.join(", ")}
        </p>
      )
    
  }
  return (
    <>
    {Object.keys(coursePart).join(", ")}
    </>
  )
}