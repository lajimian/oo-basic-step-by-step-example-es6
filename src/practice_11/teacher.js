import Person from "./person.js";
class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }
    introduce() {
        if (this.klasses == undefined)
            return (super.introduce() + ` I am a Teacher. I teach No Class.`);
        else
            return (super.introduce() + ` I am a Teacher. I teach Class ${this.klasses[0].number}, ${this.klasses[1].number}.`);
    }
    isTeaching(student) {
        for (var i = 0; i < this.klasses.length; i++)
            if (this.klasses[i].isIn(student))
                return true;
        return false;
    }
}
export default Teacher;

