const jwt = require('jsonwebtoken')

const playload = {
    stdid: "B6215576",
    name: "Butsakorn",
    major: "CPE"
}

const key = "MY_KEY";

const token = jwt.sign(playload, key,{expiresIn: 60*5})
console.log(token);

//ถอดรหัส

try{
    const dataToken = jwt.verify(token, key);
    console.log(dataToken);
}catch(error){
    console.log(error);

}



