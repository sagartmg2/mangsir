

let projector = {
    color: "black",
    model: "viewsocnic",
    project: () => {
        console.log("is projecting..");
    }
}


let projector1 = {
    color: "white",
    model: "viewsocnic"
}
let projector2 = {
    color: "white",
    model: "viewsocnic"
}
let projector3 = {
    color: "blck",
    model: "samsung"
}

function Projector(color, brand) {
    this.color = color;
    this.brand = brand
}

Projector.prototype.project = () => {
    console.log("is projecting.... ")
}

let projector5 = new Projector("red", "lg")
let projector6 = new Projector("red", "samsugn")
console.log(projector5);
console.log(projector6);
projector6.project()


class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    makeSound() {
        console.log("making sound..");
    }

}

let dog = new Animal("dog", "brown")
let cat = new Animal("cat", "brown")
console.log(dog)
console.log(cat)
cat.makeSound()

class Dog extends Animal {
    constructor(color) {
        super("dog", color)
    }
}

let german = new Dog("brown")
let pug = new Dog("black")
console.log(german);
console.log(pug);
pug.makeSound()



