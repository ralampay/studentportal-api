const bcrypt = require("bcrypt");

let mySalt = '';
bcrypt.genSalt(10, (err, salt) => {
    mySalt = salt
    console.log(`salt: ${mySalt}`)
    
    let password = 'mypassword'

    let myHash = ""
    
    bcrypt.hash(password, mySalt).then((hash) => {
        myHash = hash
        console.log(`hash: ${myHash}`)

        let inputPassword = 'mypassword'

        bcrypt.compare(inputPassword, myHash).then((result) => {
            console.log(`result: ${result}`)
        })
    })
})