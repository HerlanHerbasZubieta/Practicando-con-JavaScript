// sincrono
function tarea1() {
    console.log("Tarea1")
}
function tarea2() {
    console.log("Tarea2")
}

function tarea3() {
    console.log("Tarea3")
}

tarea1()
tarea3()
tarea2()

// asincrono
function tarea4() {
    setTimeout(() => {
        console.log("Tarea 4 completada")
    }, 3000);
}

function tarea5() {
    setTimeout(() => {
        console.log("Tarea 5 completada")
    }, 1000);
}

function tarea6() {
    setTimeout(() => {
        console.log("Tarea 6 completada")
    }, 3000);
}

// tarea4()
// tarea5()
// tarea6()

// promesas
function tarea7() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tara7 completada")
            resolve("Resolvio tarea7")
        }, 3000);
    })
}

function tarea8() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tara8 completada")
            resolve("Resolvio tarea8")
            reject("Error tarea8")
        }, 1000);
    })
}

function tarea9() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tara9 completada")
            resolve("Resolvio tarea9")
        }, 2000);
    })
}

tarea7().then(tarea8).then(tarea9)

tarea7().then(response => {
    console.log(response)
    
    tarea8().then(response => {
        console.log(response)
        tarea9().then(response => {
            console.log(response)
        })
    })
}).catch(err => {
    console.log(err)
});


async function ejecutarTareas() {
    await tarea7()    
    await tarea8()    
    await tarea9()    
}

ejecutarTareas()