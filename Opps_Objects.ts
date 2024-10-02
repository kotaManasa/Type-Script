var student = {
    studentId:555,
    studentName:"Manasa",
    studentMarks:100, 
    getResults:function()
    {
    if(this.studentMarks>=35)
        {
            return "pass";
        }
        else
        {
            return "fail";
        }
    }
};
//console.log(student);
//console.log(student.studentId);
console.log(student.getResults());