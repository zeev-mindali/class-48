var taskNameList = [];
var taskDateList = [];
var taskDoneList = [];

const addTask = ()=>{
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    newTask(taskName,taskDate);
    createTable();
}

const newTask = (taskName,taskDate)=>{
    taskNameList.push(taskName);
    taskDateList.push(taskDate);
    taskDoneList.push(false);
}

const createTable = ()=>{
    var result = `<table border="1" cellSpacing="0">`;    
    for (var index=0;index<taskNameList.length;index++){       
        result += `
            <tr>
                <td>${taskNameList[index]}</td>
                <td>${taskDateList[index]}</td>
                <td><input type="checkbox" ${taskDoneList[index]?"checked":""}/></td>
            </tr>
        `;
    }
    result+="</table>" 
    document.getElementById("taskList").innerHTML = result;
}