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
var Person //Parent
 = /** @class */ (function () {
    function Person(a, b) {
        this.name = a;
        this.age = b;
    }
    Person.prototype.getResults = function () {
        return this.name + "," + this.age;
    };
    return Person;
}());
//child
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(p, q, r, s, t) {
        var _this = _super.call(this, p, q) || this;
        _this.studentid = r;
        _this.studentname = s;
        _this.studentmarks = t;
        return _this;
    }
    Student.prototype.getResults = function () {
        return this.name + "," + this.age + "," + this.studentid + "," + this.studentname + "," + this.studentmarks;
    };
    return Student;
}(Person));
var p = new Person("nani", 20);
console.log(p.age);
console.log(p.name);
console.log(p.getResults());
console.log("............................");
var s = new Student("raghu", 20, 101, "raghu", 30);
console.log(s.getResults());
