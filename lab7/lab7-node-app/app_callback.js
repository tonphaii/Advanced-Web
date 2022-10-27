const myRequest = (message,callback) => {
    console.log("---Start---")
    const response = message+' done!!'
    const error = undefined;
    const result = callback(error, response);
    console.log(result)
    console.log("---Finish---")
}

const myCallback = (error,res) => {
    if (error) {
        return "Error "+error;
    }
    else{
        return res;
    }

}

myRequest("Hello world",myCallback);
