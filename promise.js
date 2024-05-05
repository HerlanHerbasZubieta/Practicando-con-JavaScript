let promise = new Promise((response, reject) => {
    let res = [
        { name: 'jose', age: 12 },
        { name: 'juana', age: 34 },
        { name: 'marco', age: 23 },
    ];
    response(res);
    reject('Fallo el servicio');
})

//Con setTimeout
let promise1 = new Promise((response, reject) => {
    setTimeout(() => {
        let res = {
            response: 200,
            description: 'Esta es la promesa1'
        }
        response(res);
        reject('Fallo el servicio');
    }, 2000);
})


let promise2 = new Promise((response, reject) => {
    setTimeout(() => {
        let res = {
            response: 200,
            description: 'Esta es la promesa2'
        }
        response(res);
        reject('Fallo el servicio');
    }, 5000)
})

let promise3 = new Promise((response, reject) => {
    setTimeout(() => {
        let res = {
            response: 200,
            description: 'Esta es la promesa3'
        }
        response(res);
        reject('Fallo el servicio');
    }, 3000)

})

promise1.then(res => {
    console.log(res.description);
    promise2.then(res => {
        console.log(res.description);
        promise3.then(res => {
            console.log(res.description);
        }).catch(error => {
            console.error(error);
        })
    }).catch(errr => {
        console.error(errr);
    })
}).catch(error => {
    console.error(error);
})