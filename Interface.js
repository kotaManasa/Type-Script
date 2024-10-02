var Student1 = /** @class */ (function () {
    function Student1() {
    }
    Student1.prototype.getFullName = function () {
        return this.firstName + "," + this.lastName;
    };
    return Student1;
}());
var m = new Student1();
m.firstName = "Kothi";
m.lastName = "thingari";
console.log(m.getFullName());
