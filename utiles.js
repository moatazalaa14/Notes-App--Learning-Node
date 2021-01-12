const fs=require("fs")
const getNotes =function(notes){
    console.log(notes)
}

var ID = function () {
   
    return '_' + Math.random().toString(36).substr(2, 9);
  };




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
        return []
    }
}

const removeNote=function(title){
    const notes=loadNotes()
    const newNotes=notes.filter(function(note){
        return note.name !==title
    })
    saveNotes(newNotes)
    console.log("remove")

}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote
}