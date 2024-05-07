class Cuenta {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }

    transferir(cantidad, cuentaDestino) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            cuentaDestino.depositar(cantidad);
        } else {
            console.log("Cantidad insuficiente de dinero Bs " + this.saldo.toFixed(2));
        }
    }

    
    depositar(cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log("Se ha depositado Bs " + cantidad.toFixed(2));
        } else {
            console.log("Cantidad invalida de dinero");
        }
    }

    obtenerSaldo() {
        return this.saldo;
    }
}

const cuentaUsuario = new Cuenta(600);
const cuentaDestino = new Cuenta(50); 


const cantidadTransferir = 400.6745;
cuentaUsuario.transferir(cantidadTransferir, cuentaDestino);
// cuentaUsuario.transferir(cantidadTransferir, cuentaDestino);


console.log("Saldo de Cuenta actual: Bs " + cuentaUsuario.obtenerSaldo().toFixed(2));
console.log("Saldo de Cuenta que recibio dinero: Bs " + cuentaDestino.obtenerSaldo().toFixed(2));
