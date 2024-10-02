enum courseNames
{
  Java,Blockchain,JavaScript
}

class Student
{
    studentName:string;
    age:number;
    course:courseNames;
}
var s=new Student();
s.studentName='Nani';
s.age=24;
s.course=courseNames.Blockchain;
console.log(s.studentName);
console.log(s.age);
console.log(s.course);
console.log(courseNames[s.course]);