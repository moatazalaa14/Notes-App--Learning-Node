const notes=require("./utiles")
const chalk=require("chalk")
const yargs =require("yargs")
yargs.version("1.1.8")
yargs.command({
    command:"add",
    describe:"This for adding new notes",
    builder:{
        title:{
            describe:"Note title",
            demandOptions:true,
            type:"string"
        },
        body:{
            describe:"This for adding new notesThis for adding new notesThis for adding new notes",
            demandOption:true,
            type:"string"
        }
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command:"remove",
    descirbe:"This for removing notes",
    handler:function(){
        console.log("Note Removed!")
    }
})
yargs.command({
    command:"list",
    descirbe:"Lists of items is ",
    handler:function(){
        console.log("Item Listed!")
    }
})
yargs.command({
    command:"read",
    descirbe:"read note which added",
    handler:function(){
        console.log("Read item!")
    }
})
yargs.parse()
