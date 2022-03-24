class Mouth {
    constructor() {
        this.isMouthOpen = false;
    }
    open() {
        this.isMouthOpen = true;
        console.log("Aaaahhhh");
    }
    close() {
        this.isMouthOpen = false;
        console.log("Mmmmhhhh");
    }
}

class Man extends Mouth {
    constructor(name) {
        super();
        this.name = name;
    }
    openMouth() {
        console.log("Ok");
        super.open();
    }
    closeMouth() {
        console.log("Ok");
        super.close();
    }
    requestOpenMouth(man) {
        console.log(`Please open your mouth, ${man.name}.`)
    }
    requestCloseMouth(man) {
        console.log(`Please close your mouth, ${man.name}.`)
    }
    checkIfMouthOpen() {
        console.log(`My mouth is ${this.isMouthOpen ? "open" : "closed"}.`)
    }
}

class Doctor extends Man {
    constructor(name) {
        super(name);
        this.isDoctor = true;
    }
    requestOpenMouth(man) {
        super.requestOpenMouth(man);
        console.log("Because I am your doctor.");
        man.openMouth();
    }
    requestCloseMouth(man) {
        super.requestCloseMouth(man);
        console.log("Because I am your doctor.");
        man.closeMouth();
    }
}

const bob = new Man("Bob");
const tim = new Man("Tim");
const drJohn = new Doctor("Dr. John");

bob.checkIfMouthOpen()
tim.requestOpenMouth(bob);
bob.checkIfMouthOpen()
drJohn.requestOpenMouth(bob);
bob.checkIfMouthOpen()
drJohn.requestCloseMouth(bob);
bob.checkIfMouthOpen()