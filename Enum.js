var courseNames;
(function (courseNames) {
    courseNames[courseNames["Java"] = 0] = "Java";
    courseNames[courseNames["Blockchain"] = 1] = "Blockchain";
    courseNames[courseNames["JavaScript"] = 2] = "JavaScript";
})(courseNames || (courseNames = {}));
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
var s = new Student();
s.studentName = 'Nani';
s.age = 24;
s.course = courseNames.Blockchain;
console.log(s.studentName);
console.log(s.age);
console.log(s.course);
console.log(courseNames[s.course]);
