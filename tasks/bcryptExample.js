/*
Examples:
1. getSalt(int): Create a proper salt value. int - Number of iterations.
2. hash(plaintText, salt): Returns the encrypted version of plainText
3. compare(plainText, hash): Returns boolean corresponding to correctness
*/
const bcrypt = require("bcrypt");

let salt = "";
let password = "password";

const runExample = async () => {
    salt = await bcrypt.genSalt(10);
    console.log(`salt: ${salt}`);

    let hash = await bcrypt.hash(password, salt);
    console.log(`hash: ${hash}`);

    let inputPassword = "password";
    // uses salt:
    // let inputHash = await bcrypt.hash(inputPassword, salt);

    // uses iteration count of bcrypt salt generation
    let inputHash = await bcrypt.hash(inputPassword, 10);
    console.log(`inputHash: ${inputHash}`);

    let result = await bcrypt.compare(inputPassword, hash);
    console.log(`result: ${result}`);
}

runExample().then(() => {
    console.log("Done");
})