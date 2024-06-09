interface Props {
  courseName: string
}

export function Header({courseName}: Props) {
  return (
    <h1>{courseName}</h1>
  )
}