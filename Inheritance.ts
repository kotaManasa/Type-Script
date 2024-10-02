class Person //Parent
{
    name:string;
    age:number;
    constructor(a:string,b:number)
    {
        this.name=a;
        this.age=b;
    }
    getResults():string
    {
       return this.name + "," + this.age;
    }
}
//child
class Student extends Person
{
  studentid:number;
  studentname:string;
  studentmarks:number;
  constructor(p:string,q:number,r:number,s:string,t:number)
  {
    super(p,q);
    this.studentid=r;
    this.studentname=s;
    this.studentmarks=t;
  }
  getResults():string
  {
    return this.name + "," + this.age + "," + this.studentid + "," + this.studentname + "," + this.studentmarks;
  }
}

var p = new Person("nani",20);
console.log(p.age);
console.log(p.name);
console.log(p.getResults());

console.log("............................");

var s= new Student("raghu",20,101,"raghu",30);
console.log(s.getResults());

