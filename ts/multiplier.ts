
interface MultiplyValues {
  value1: number;
  value2: number;
}

function parseArgs(args: string[]): MultiplyValues {  
  if (args.length < 4) throw new Error("Not enough arguments")
  if (args.length > 4) throw new Error("Too many arguments")
  
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[3]),
      value2: Number(args[2]),
    }
  }
}

function multiplicator(a: number,b: number, text:string) {
  console.log(text, a*b);

}
try {
  const {value1, value2} = parseArgs(process.argv)
  multiplicator(value1, value2, "result:")
} catch (error: unknown) {
  let message = "something bad happened."
  if (error instanceof Error) {
    message += " Error: " + error.message
  }
  console.log(message);
  
}
