import Student from "./student.js";
class Class{
    constructor(number){
        this.number=number;
    }
    leader;

    getDisplayName(){
        return(`Class ${this.number}`);

    }
    assignLeader(student){
        if(student.klass == this)
        this.leader=student;
        else
        console.log("It is not one of us.");

    }

    appendMember(student){
        student.klass=this;


    }
        
    
}
export default Class;



