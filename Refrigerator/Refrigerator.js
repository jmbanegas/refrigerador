'use strict';

class Refrigerator {
    constructor(huevo, leche, tomate, papas, carne) {
        this.huevo = huevo;
        this.leche = leche;
        this.tomate = tomate;
        this.papas = papas;
        this.carne = []; // Inicializamos el array para productos de tipo carne
    }

    // Método para agregar productos
    agregarProducto(producto, cantidad) {
        switch(producto) {
            case 'huevo':
                this.huevo += cantidad;
                break;
            case 'leche':
                this.leche += cantidad;
                break;
            case 'tomate':
                this.tomate += cantidad;
                break;
            case 'papas':
                this.papas += cantidad;
                break;
            default:
                alert("Producto no reconocido.");
                break;
        }
       alert(`Se agregaron ${cantidad} ${producto}(s).`);
    }

    // Método para quitar productos
    quitarProducto(producto, cantidad) {
        switch(producto) {
            case 'huevo':
                this.huevo = Math.max(0, this.huevo - cantidad);
                break;
            case 'leche':
                this.leche = Math.max(0, this.leche - cantidad);
                break;
            case 'tomate':
                this.tomate = Math.max(0, this.tomate - cantidad);
                break;
            case 'papas':
                this.papas = Math.max(0, this.papas - cantidad);
                break;
            default:
               alert("Producto no reconocido.");
                break;
        }
        alert(`Se quitaron ${cantidad} ${producto}(s).`);
    }

    // Método para agregar carne
    agregarCarne(tipoCarne) {
        this.carne.push(tipoCarne);
        alert(`Se agregó carne de ${tipoCarne}.`);
    }

    // Método para mostrar la información actual del refrigerador
    mostrarInformacion() {
        alert("Contenidos del Refrigerador:");
        alert(`Huevo: ${this.huevo}`);
        alert(`Leche: ${this.leche}`);
        alert(`Tomate: ${this.tomate}`);
        alert(`Papas: ${this.papas}`);
        alert(`Carne: ${this.carne.join(', ')}`);
    }
}

// Ejemplo de uso
let miRefrigerador = new Refrigerator(20, 2, 10, 5, []);
miRefrigerador.agregarProducto('huevo', 10);
miRefrigerador.agregarCarne('pollo');
miRefrigerador.mostrarInformacion();
