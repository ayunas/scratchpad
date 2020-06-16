//create object literals
const football = {
    name : "football",
    players : 22,
    moves : ["touchdown", "fieldGoal"]
}

const pingPong = {
    name : "pingPong",
    players : 2,
    moves : ["serve","rally","lob"]
}

const basketball = {
    name : "basketball",
    players : 10,
    moves : ["slam dunk","3 pointer","free throw"]
}

//vanilla functions
function Sport() {
    const hidden = {};
    hidden.players= 3;
    hidden.name = "pool";
    return hidden;
}

const sporty = Sport();
console.log(sporty);

//class 
