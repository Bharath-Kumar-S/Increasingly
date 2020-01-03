const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!!1) {
                return resolve('success')
            }
            else {
                return reject('error');
            }
        }, 5000)
    })
}


// using async await 
(async () => {
    const data = await getData();
    console.log(data);
})()

//using then callbacks
getData().then((value) => {
    console.log(value);
})