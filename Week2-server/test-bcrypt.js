const bcrypt = require('bcrypt');
const password = "superSecretPassword123";

// 1. Hash the password
// The '10' is the "Salt Rounds". It means "run the shredder 2^10 times".
// Higher number = More secure, but slower server.

console.log("1. Plain Text:", password);
console.log("Hashing...");
const hash = bcrypt.hashSync(password, 10);
console.log("2. Hashed (Stored in DB):", hash);

// 3. Verify
// Imagine a user tries to login.
const attempt1 = "wrongPassword";
const attempt2 = "superSecretPassword123";
const check1 = bcrypt.compareSync(attempt1, hash);
const check2 = bcrypt.compareSync(attempt2, hash);

console.log(`Does '${attempt1}' match?`, check1); // Should be false
console.log(`Does '${attempt2}' match?`, check2); // Should be true