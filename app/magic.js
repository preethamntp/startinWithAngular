var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + ' Something';
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.saySomething("hello");
