const fs=require("fs")
const getNotes =function(notes){
    console.log(notes)
}

const addNote=function(title,body){
    const notes= loadNotes()
    console.log(notes.name)
}
const loadNotes=function(){
    try {
        const dataBuffer=fs.readFileSync("./notes.json")
    const dataJson=JSON.parse(dataBuffer.toString())
    return dataJson
    } catch (error) {
        return "ggg"
    }
    
}

module.exports={
    getNotes:getNotes,
    addNote:addNote
}