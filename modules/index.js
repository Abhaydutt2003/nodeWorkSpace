console.log("Hello World!!");

function f(a, b) {
    return a + b;
}

console.log(f(2, 3));

console.log(process.argv);

var args = process.argv.slice(2);

console.log("After adding arguments");

console.log(f(parseInt(args[0]), parseInt(args[1])));