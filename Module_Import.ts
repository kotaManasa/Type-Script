import {Student} from "./Modules";

class StudentsList
{
    students:Student[]=[
        new Student(101,"ramu",40),
        new Student(102,"priya",20),
        new Student(103,"siri",80),
        new Student(104,"anu",50),
    ];
    getTopRanker():Student{
        var index;
        var max=0;
        for(var i in this.students)
            {
                if(this.students[i].marks>max)
                    {
                        max=this.students[i].marks;
                        index=i;
                    }          
            }
        return this.students[index];
    }
}
var s:StudentsList=new StudentsList();
console.log(s.getTopRanker());