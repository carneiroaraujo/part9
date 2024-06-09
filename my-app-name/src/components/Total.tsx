interface Props {
  totalExercises: number
}

export function Total({totalExercises}: Props) {
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}