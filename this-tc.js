/*
Default (Global) binding rule.
Implicit binding rule.
Explicit binding rule
Constructor calls with new
https://scotch.io/courses/10-need-to-know-javascript-concepts/the-this-keyword
*/


//1. global binding (in function and out)
// console.log(this);

const arrowFn = () => {
    console.log(this);
}

// arrowFn();

function thisFn() {
    console.log(this);
}



//2. containing object (implicit) (3 bootcamps)

const tcDylan = {
    TA : 'dylan',
    students : 14,
    lead : function() {
        console.log(`${this.TA} leads a team of ${this.students} students`);
    }
}

// tcDylan.lead();

const tcEmilios = {
    TA : 'emilios',
    students : 13,
    lead : function() {
        console.log(`${this.TA} leads a team of ${this.students} students`);
    }
}

// tcEmilios.lead();

const tcDesaree = {
    TA : 'emilios',
    students : 13,
    lead : () => {
        console.log(`${this.TA} leads a team of ${this.students} students`);
    }
}

// tcEmilios.lead();





//3. hidden object (new)
function TAconstructor(ta,students) {
    this.TA = ta;
    this.students = students;
    this.lead = () => console.log(`${this.TA} leads a team of ${this.students} students`);
}


const TCemilios = new TAconstructor("emilios",12);
const TCdylan = new TAconstructor("dylan",13);
const TCdesaree = new TAconstructor("emilios",14);

// TCemilios.lead()
// TCdesaree.lead();
// TCdylan.lead();




//4. explicit object (call,apply,bind)

const TAmark = {
    TA : 'mark',
    students : null,
}

const randomTA = {
    TA : 'random TA',
    students : 0,
    lead : function() {console.log(this.TA + " is a leader")}
    // lead : () => console.log(this.TA + " is a leader")
}

// randomTA.lead = () => console.log(this.TA + " is a leader");
randomTA.lead();


TAmark.lead = randomTA.lead.bind(TAmark);

TAmark.lead();


//Classes - classic functions vs arrows