class Student{
    private name:String;
    private subject:String;
    private age:number;
    private grade:number;
    
    private static totalStudents:number=0;
    private static totalGrades:number=0;
    private static listOfSubjects = ["Programming","Math","Physics","History"];

    constructor(name:String,subject:String,age:number,grade:number){
        this.setName=name;
        this.setSubject=subject;
        this.setGrade=grade;
        this.setAge=age;
        Student.totalStudents++;
        Student.totalGrades+=this.grade;
    }

    public set setName(name:String){
        this.name=name;
    }

    public set setSubject(subject:String){        
        for (let counter=0;counter<Student.listOfSubjects.length;counter++){
            if (Student.listOfSubjects[counter]===subject){
                this.subject=subject;
                return;
            }
        }
        console.log("unknown subject:",subject);
        this.subject="n/a";
    }

    public set setGrade(grade:number){
        if (grade<0 || grade>100){
            console.log("grade need to be between 0-100");
            this.grade=0;
            return;
        }
        this.grade=grade;
    }

    public set setAge(age:number){
        if (age<18 || age>120){
            console.log("age need to be between 18-120");
            this.age=0;
            return;
        }
        this.age=age;
    }

    public static getGradeAvg():number{
        return Student.totalGrades/Student.totalStudents;
    }
}