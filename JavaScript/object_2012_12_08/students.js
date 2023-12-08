var student1 = {
    name : "Jordan",
    class : 48,
    grades : [98,95,100,100,98],
    getAvg: function(){
        var avg=this.grades[0];
        for (var counter=1;counter<this.grades.length;counter++){
            avg+=this.grades[counter];
        }
        return avg/this.grades.length;
    }
}

var student2 = {
    name : "Daniel",
    class : 48,
    grades : [95,100,94,92,98],
    getAvg: function(){
        var avg=this.grades[0];
        for (var counter=1;counter<this.grades.length;counter++){
            avg+=this.grades[counter];
        }
        return avg/this.grades.length;
    }
}

var student3 = {
    name : "Gabriel",
    class : 48,
    grades : [86,89,92,85,98],
    getAvg: function(){
        var avg=this.grades[0];
        for (var counter=1;counter<this.grades.length;counter++){
            avg+=this.grades[counter];
        }
        return avg/this.grades.length;
    }
}

console.log("student 1 avg: ",student1.getAvg());
console.log("student 2 avg: ",student2.getAvg());
console.log("student 3 avg: ",student3.getAvg());