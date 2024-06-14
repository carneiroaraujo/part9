import { useState } from "react";
export function useField(args:object = {}) {
  const [value, setValue] = useState("")
  function onChange(event:React.FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value)
  }

  return {...args, value, onChange}
}