// put a comment in the function body indicating 
// whether the function is impure or pure, with a short reason why

const nums = [1,2,3,4,5,5,6,7,9,10];
const numSquared = [];

function squareNum(nums) {
   nums.forEach(n => numSquared.push(n**2));
}

squareNum(nums);

console.log(numSquared);
//=======================================================================

const printNums = nums => nums.forEach(n => console.log(n));

//=======================================================================

function getDate() {
    const date = new Date();
    const day = date.getUTCDate();
    const month = date.getMonth();
    const year = date.getUTCFullYear();
    const dateMsg = `curent date: ${month}/${day}/${year}`;
    return dateMsg;
}

console.log(getDate());

//=======================================================================

let school = "Trilogy";

function setSchool() {
    school = "TEKCamp";
}

//=======================================================================

function tripleNums(nums) {
    numsTriple = nums.map(n => 3*n);
    return numsTriple;
}

console.log(tripleNums(nums));

//=======================================================================

const copyNums = nums => [...nums];

console.log(copyNums(nums));

//=======================================================================

let schoolName = "Berkeley";

function schoolSet(old,name) {
    old = name;
    return old;
}

console.log(schoolSet(schoolName,"Harvard"));
