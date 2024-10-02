"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Modules_1 = require("./Modules");
var StudentsList = /** @class */ (function () {
    function StudentsList() {
        this.students = [
            new Modules_1.Student(101, "ramu", 40),
            new Modules_1.Student(102, "priya", 20),
            new Modules_1.Student(103, "siri", 80),
            new Modules_1.Student(104, "anu", 50),
        ];
    }
    StudentsList.prototype.getTopRanker = function () {
        var index;
        var max = 0;
        for (var i in this.students) {
            if (this.students[i].marks > max) {
                max = this.students[i].marks;
                index = i;
            }
        }
        return this.students[index];
    };
    return StudentsList;
}());
var s = new StudentsList();
console.log(s.getTopRanker());
