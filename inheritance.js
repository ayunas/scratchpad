class Structure {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    operate = () => console.log(`The ${this.name} is ${this.type}`);
}

class House extends Structure {
    constructor(name,type) {
        super();

    }
}

const h = new House("kaaba","worship");
console.log(h);

class Bridge extends Structure {
    constructor(name,type) {
        super(name,type);
    }
}

class Attraction extends Structure {
    constructor(name,type) {
        super(name,type);
    }
}

class Dinosaur extends Structure {
    constructor(name,type) {
        super(name,type);
    }
}




// const kaaba = new Structure("Kaaba","Place of Worship");
// const vatican = new Structure("St. Peter's Basillica","Place of Worship");
// const light = new Structure("Jeddah Light","Navigational Building");
// const burjArab = new Structure("Burj Al Arab", "Hotel");
// const burjKhalifa = new Structure("Burj Khalifa","Hotel");
// const eiffel = new Structure("Eiffel Tower","Tourist Attraction");
// const bridge = new Structure("Danyang-Kunshan Bridge","Form of Transportation");
// const dinosaur = new Structure("Smithsonian Dinosaur","Museum");





