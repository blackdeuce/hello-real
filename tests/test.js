const greet = require('../src/app');

if (greet() === "Hello, CI/CD World!") {
    console.log("Test Passed");
    process.exit(0);
} else {
    console.log("Test Failed");
    process.exit(1);
}
