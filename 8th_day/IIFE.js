// Immediately Invoked Function Expressions (IIFE)


(function code() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Jack'); // anonymous IIFE
