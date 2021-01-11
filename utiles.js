const fs=require("fs")
const getNotes =function(notes){
    console.log(notes)
}

const addNote=function(title,body){
    const notes= loadNotes()
    const newNotes=notes.filter(function(note){
        return note.name === title
    })
    if(newNotes.length===0){
    notes.push(
        {name:title,age:body}
        )   
        saveNotes(notes)
        console.log("done")
    }else{
        console.error("title is used")
    }

}

const saveNotes=(notes)=>{
 const dataJson=JSON.stringify(notes)
 fs.writeFileSync("notes.json",dataJson)
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