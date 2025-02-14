import fs from "fs/promises";

let a = await fs.readFile("adi4.txt")
let b = await fs.writeFile("adi4.txt", "No dates, only missing dependencies")

console.log(a.toString())
