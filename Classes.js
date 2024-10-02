var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.getResults = function () {
        if (this.studentmarks >= 35) {
            return "pass";
        }
        else {
            return "fail";
        }
    };
    return student;
}());
var s1 = new student();
s1.studentid = 101;
s1.studentname = "Raghu";
s1.studentmarks = 60;
//console.log(s1.getResults());
console.log(s1.studentname);
