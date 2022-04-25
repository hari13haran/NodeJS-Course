const fs = require('fs');

//read file
fs.readFile('./docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

//console.log("This is the last line of code");

//write file
//overrites if its existing file & creates a new file if it doesnt exist
fs.writeFile('./docs/blog2.txt','Hello world! new file created!', () => {
    console.log('File created & written sucessfully')
});

// create and delete folders / directories
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created!');
    });
}
else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Folder deleted!');
    });
}

//delete files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink ('./docs/deleteme.txt' , (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted!')
    });
}
else {
    console.log('deleteme.txt file doesnt exist. pls create one!');
}