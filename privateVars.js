class Student {

    #name;
    #education;
    
    constructor(name,education,age) {
        this.#name = name;
        this.#education = education;
        this._age = age;
    }

    getName() {
       return this.#name;
    }

    getEducation() {
        return this.#education;
    }

}

const amir = new Student('amir','skills',38);

const name = amir.getName();
const educ = amir.getEducation();
console.log(name,educ);
console.log(amir._age);



