var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("moved Automobile ".concat(this.wheelCount, " miles"));
        };
        Motorcycle.prototype.getFullName = function () {
            return "Mc-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
