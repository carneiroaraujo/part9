export function parseArgs(args:string[]): number[] {
  if (args.length < 4) throw new Error("Not enough arguments")
  
  return args.slice(2).map(arg => {
    const value = Number(arg)
    if (isNaN(value)) throw new Error("Invalid argument found")
    return value
  })
}
