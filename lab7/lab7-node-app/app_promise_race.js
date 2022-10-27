const p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("The first route to my home");
        resolve(1);
    }, 4000);

})
const p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("The second route to my home");
        resolve(2);
    }, 2000);

})

Promise.race([p1, p2]).then(function (result) {
    console.log(result);
});