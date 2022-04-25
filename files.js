const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log("This is the last line of code");

//overrites if its existing file & creates a new file if it doesnt exist
fs.writeFile('./docs/blog2.txt','Hello world! new file created!', () => {
    console.log('File created & written sucessfully')
});