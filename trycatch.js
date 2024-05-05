try {
    console.log('Hola soy try-catch')
} catch (error) {
    console.log('Salio algo mal', error);
} 

//Con finally siempre se ejecuta
try {
    console.log('Hola soy try-catch')
} catch (error) {
    console.log('Salio algo mal', error);
} finally {
    console.log('Siempre me ejecuto');
}


//Con setTimeout
try {
    console.log('Hola mundo!!')
    setTimeout(()=>{
        console.log('Soy el timeout');
    }, 1000);
} catch (error) {
    console.log('Salio algo mal', error);
} finally {
    console.log('Siempre me ejecuto');
}

console.log('Sali del trycatch')