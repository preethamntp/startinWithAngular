class Greeter{
    saySomething(message:string='whats up'){
        return message + ' Something';
    }
}

var greeter = new Greeter();
greeter.saySomething("hello");