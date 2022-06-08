const fs = require("fs");
const keygen = require("keygenerator");

const keyFacebook = keygen.password({
    length: 15,
    numbers: true,
    upperCase: true,
});

const keyTwitter = keygen.password({
    length: 15,
    numbers: true,
    upperCase: true,
});

const keyInstagram = keygen.password({
    length: 15,
    numbers: true,
    upperCase: true,
})

const currentKey = [
`Keys -  
Twitter: ${keyTwitter}
Facebook: ${keyFacebook}
Instagram: ${keyInstagram}`
]

console.log(currentKey);

fs.writeFile('./keys.txt', `${currentKey}`, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    else{
        console.log("KEYS GENERATED!!!");
    }
});
