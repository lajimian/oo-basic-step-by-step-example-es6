class Class {
    constructor(number) {
        this.number = number;
    }
    leader;
    teacher;
    teacher_lead;
    getDisplayName() {
        return (`Class ${this.number}`);
    }
    assignLeader(student) {
        if (student.klass == this)
         {
             this.leader = student; 
             console.log(`I am ${this.teacher_lead}. I know ${student.name} become Leader of ${this.getDisplayName()}.`); 
         }   
        else
            console.log("It is not one of us.");
        
            
    }
    appendMember(student) {
        student.klass = this;
        
        if(this.isIn(student))
        console.log(`I am ${this.teacher}. I know ${student.name} has joined ${this.getDisplayName()}.`);
    }
    isIn(student) {
        if (student.klass == this)
            return true;
        return false;
    }
    registerJoinListener(teacher) {

        this.teacher=teacher.name;
    }
    registerAssignLeaderListener(teacher_lead) {

       this.teacher_lead=teacher_lead.name;
    }
}
export default Class;




