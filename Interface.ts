interface IStudent
{
   firstName:string;
   lastName:string;
   getFullName():string;
}
class Student1 implements IStudent
{
  firstName: string;
  lastName: string;

  getFullName():string
  {
     return this.firstName + "," + this.lastName;
  }
}
var m=new Student1();
m.firstName="Kothi";
m.lastName="thingari";
console.log(m.getFullName());