
const fs=require("fs")
// const books={
//     title:"name",
//     author:"moataz"
// }

// const booksToJson=JSON.stringify(books)
// console.log(booksToJson)
// fs.writeFileSync("data.json",booksToJson)

// const dataBuffer=fs.readFileSync("data.json")
// const data=JSON.parse(dataBuffer.toString())
// console.log(data)


const dataBuffer=fs.readFileSync("data.json")
const data=JSON.parse(dataBuffer.toString())
console.log(data)
data.name="ahmed"
data.age=23
console.log(data)
fs.writeFileSync("data.json",JSON.stringify(data))