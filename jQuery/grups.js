$(document).ready(function (){
    $("generator").click(
        generateGroup
    )
});

var students = ["Alba", "Aaron", "Silvia", "Iker", "Nieto", "Juan Carlos", "Sergio", "Pablo", "Eduard", "Rubén", "Jesús", "Carlos", "Castilla", "Adrian", "Gomez"];


function generateGroup (){
    var group = []
    
    printGroups(["A", "B", "C"], 1);

}

function printGroups (groupList, numGroup){
    $("groups").append().append("<h1> Group number: " + numGroup + "</h1>")
    for (student of groupList){
        $("groups > ul ").append("<li>" + student + "</li>");
    }
}

function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}