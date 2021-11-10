function timeout(promise, time) {

    return new Promise((resolve, reject) => {
        promise.then(resolve()).catch(reject("error"));
        setTimeout(() => {
            reject("timeout");
        }, time);
    })
}
 
timeout(testPromise(500),1000).then(() => console.log("Test 1 Passed"), () => console.log("Test 1 Failed"))
timeout(testPromise(1000), 500).then(() => console.log("Test 2 Failed"), () => console.log("Test 2 Passed"))
 
 
function testPromise(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}
