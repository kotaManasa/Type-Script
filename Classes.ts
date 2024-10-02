class student{
    studentid:number;
    studentname:string;
    studentmarks:number;

    getResults()
    {
        if(this.studentmarks>=35)
            {
                return "pass";
            }else
            {
                return "fail";
            }
    }    
}
var s1=new student();
s1.studentid=101;
s1.studentname="Raghu"
s1.studentmarks=60;
//console.log(s1.getResults());
console.log(s1.studentname);
