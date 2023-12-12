// var student1 = {
//     name : "Jordan",
//     class : 48,
//     grades : [98,95,100,100,98],
//     getAvg: function(){
//         var avg=this.grades[0];
//         for (var counter=1;counter<this.grades.length;counter++){
//             avg+=this.grades[counter];
//         }
//         return avg/this.grades.length;
//     }
// }

//constructor -> c'tor
function Student (studentName,studentClass,studentGrades){
    //fields
    this.name = studentName;
    this.class=studentClass;
    this.grades=studentGrades;

    //methods
    this.getAvg = function(){
        var avg=this.grades[0];
                for (var counter=1;counter<this.grades.length;counter++){
                    avg+=this.grades[counter];
                }
                return avg/this.grades.length;
    }
    this.getMin = function(){
        var min = this.grades[0];
        for (var index=1;index<this.grades.length;index++){
            if (this.grades[index]<min){
                min = this.grades[index];
            }
        }
        return min;
    }

    this.tableHeader = function(){
        return `
            <table cellspacing="0" border="1" style="margin-left: auto;margin-right: auto;">
                    <th>name</th>
                    <th>class</th>
                    <th>grades avg</th>
                `;
    }
    this.tableData = function(){
        return `
            <tr><td>${this.name}</td><td>${this.class}</td><td>${this.getAvg()}</td></tr>
        `;
    }
    this.tableFooter = function(){
        return `</table>`
    }
}

function injectTable(studentList){
    var myTable = studentList[0].tableHeader();
    for (var index=0;index<studentList.length;index++){
        myTable+=studentList[index].tableData();
    }
    myTable+=studentList[0].tableFooter();
    document.getElementById("res").innerHTML = myTable;
}

//injectTable([student1,student2,student3]);
injectTable([ 
    new Student("Jordan",48,[98,95,100,100,98]),  
    new Student("Daniel",48,[95,100,94,92,98]), 
    new Student ("Gabriel",48,[86,89,92,85,98])
]);

// const student1 = new Student("Jordan",48,[98,95,100,100,98]);
// const student2 = new Student("Daniel",48,[95,100,94,92,98]);
// const student3 = new Student ("Gabriel",48,[86,89,92,85,98]);
// console.log(`average of ${student1.name} is ${student1.getAvg()} minimum grade ${student1.getMin()}`);
// console.log(`average of ${student2.name} is ${student1.getAvg()} minimum grade ${student2.getMin()}`);
// console.log(`average of ${student3.name} is ${student1.getAvg()} minimum grade ${student3.getMin()}`);


// function ilanObject(){
//     this.name="Ilan";
//     this.idf = "Kanaf 1";

//     this.sayHi=function(){
//         console.log("i am not a war criminal!!!");
//     }
// }

//const ilan = new ilanObject();
//console.log(ilan.sayHi());