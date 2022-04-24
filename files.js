const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("This is the last line of code");
