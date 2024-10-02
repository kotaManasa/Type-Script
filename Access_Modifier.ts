class Student
{
    public studentid:number=101;
    private studentname:string="Manu";
    protected marks:number=80;
    public display():void
    {
      console.log("Student.display:");
      console.log(this.studentid);  
      console.log(this.studentname);
      console.log(this.marks);
    }
}

class EngineeringStudent extends Student
{
    public display2():void 
    {
        console.log("EngineeringStudent.display2:");
        console.log(this.studentid);
        //console.log(this.studentname);
        console.log(this.marks);
    }
}

class test
{
  sampleMethod()
  {
    var s=new Student();
    s.display();
    var s2=new EngineeringStudent();
    s2.display2();
    console.log("----------------");
    console.log(s.studentid);
    //console.log(s.studentname);
    //console.log(s.marks);
  }
}
var t:test=new test();
t.sampleMethod();  

