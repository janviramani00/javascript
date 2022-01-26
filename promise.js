//promises and error handling


// var promises = new Promise(function (resolve, reject) {
//         const x = "hello";
//         const y = "Hello";
//         if (x === y) {
//                 resolve();
//         } else {
//                 reject();
//         }
// })
//         .then(function () {
//                 console.log("success");
//         })
//         .catch(function () {
//                 console.log("error");
//         });




var first = function () {
        console.log(1);

        return new Promise(resolve => {
                setTimeout(function () {
                        resolve("3");
                        console.log("2");

                }, 2000);
        })
}

var second = function () {
        console.log("4");

        return new Promise(resolve => {
                setTimeout(function () {
                        resolve("6");
                        console.log("5");
                }, 4000);
        })
}

var f = async function () {
        console.log("async function called");


        const fpromise = await first();
        console.log("after 2 seconds return first promise");
        console.log(fpromise);

        const spromise = await second();
        console.log("after 4 seconds return second promise");
        console.log(spromise);
}

f();

// var data = async () => {
//         var y = await "hello";
//         console.log(y);

// }
// console.log(1);
// data();
// console.log(2);
