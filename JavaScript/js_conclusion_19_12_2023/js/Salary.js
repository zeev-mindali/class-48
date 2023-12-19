class Salary{
    constructor(name,salary,password){
        this._name=name;
        this._salary=salary;
        this._password=password;
    }

    maaser(){
        return this._salary*0.1;
    }

    tax(){
        return this._salary*0.75;
    }

    //getters
    get getName(){
        return this._name+" the king";
    }

    get getSalary(){
        return this._salary;
    }

    get getPassword(){
        return "you can not see the password";
    }

    //setters
    set setName(name){
        this.name=name
    }

    set setSalary(salary){
        this.salary=salary;
    }

    workerInfo(){
        return `${this._name} have salary of ${this._salary} after taxes it's ${this.tax()} and gives ${this.maaser()}`;
    }
}

var matti = new Salary("Matti",80000,"iam1234");
var ilan = new Salary("Ilan, turn off the light", 45000,"the one that every one knows");
var gabriel = new Salary("Gabriel",4500,"Gabriel12345!!");

console.log(matti.workerInfo());
console.log(ilan.workerInfo());
console.log(gabriel.workerInfo());

gabriel.setSalary=55000;
console.log(gabriel.workerInfo())
console.log(gabriel.getName);
console.log(gabriel.getPassword)