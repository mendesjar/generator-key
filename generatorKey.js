const fs = require("fs");
/*
const keygen = require("keygenerator");
const generate = keygen.password({
    length: 15,
    numbers: true,
}) */

fs.readFile('./text.txt', "utf8", function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    else{
        console.log(data.toString());
    }
});
