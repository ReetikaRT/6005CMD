const { Validator } = require('jsonschema');
const v = new Validator();

// 1. Define the Rules (The Schema)
const userSchema = {
    type: "object",
    properties: {
        username: { type: "string", minLength: 4 },
        age: { type: "integer", minimum: 18 },
        email: { type: "string", format: "email" } // Checks for @ and .
    },
    required: ["username", "email"] // Age is optional
};

// 2. Test Data
const goodUser = {
    username: "coder123",
    age: 25,
    email: "test@coventry.ac.uk"
};

const badUser = {
    username: "yo", // Too short
    age: 12, // Too young
    email: "not-an-email"
};

console.log("--- Testing Good User ---");
const res1 = v.validate(goodUser, userSchema);
console.log("Valid?", res1.valid); // true
console.log("\n--- Testing Bad User ---");
const res2 = v.validate(badUser, userSchema);
console.log("Valid?", res2.valid); // false
console.log("Errors:", res2.errors.map(e => e.stack));