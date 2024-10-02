var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
        this.studentid = 101;
        this.studentname = "Manu";
        this.marks = 80;
    }
    Student.prototype.display = function () {
        console.log("Student.display:");
        console.log(this.studentid);
        console.log(this.studentname);
        console.log(this.marks);
    };
    return Student;
}());
var EngineeringStudent = /** @class */ (function (_super) {
    __extends(EngineeringStudent, _super);
    function EngineeringStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EngineeringStudent.prototype.display2 = function () {
        console.log("EngineeringStudent.display2:");
        console.log(this.studentid);
        //console.log(this.studentname);
        console.log(this.marks);
    };
    return EngineeringStudent;
}(Student));
var test = /** @class */ (function () {
    function test() {
    }
    test.prototype.sampleMethod = function () {
        var s = new Student();
        s.display();
        var s2 = new EngineeringStudent();
        s2.display2();
        console.log("----------------");
        console.log(s.studentid);
        //console.log(s.studentname);
        //console.log(s.marks);
    };
    return test;
}());
var t = new test();
t.sampleMethod();
