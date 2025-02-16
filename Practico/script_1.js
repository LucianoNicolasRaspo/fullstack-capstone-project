
/*const sales = [
    {item: "notebook", cantidad: 6, precio: 1400},
    {item: "tablet", cantidad: 6, precio: 1600},
    {item: "PC-Escritorio", cantidad: 8, precio: 2000},
];

function calcularTotal(sales){
    let total = 0;
    for(let i = 0; i < sales.length; i++){
        total += sales[i].cantidad * sales[i].precio;
    }
    return total;
}
console.log("Total final: ",calcularTotal(sales));
*/
/* const ordenes = [
    { item: "pizza", cantidad: 10, precio: 1400 },
    { item: "algo", cantidad: 8, precio: 1900 },
    { item: "masa", cantidad: 6, precio: 2900 },
];

function generarOrden(ordenes){
    let total = 0;
    console.log("Orden:");
    console.log("- - - - - - - - -");

    for(let i = 0; i < ordenes.length; i++){
        const itemTotal = ordenes[i].cantidad * ordenes[i].precio;
        total += itemTotal;
        console.log(`${ordenes[i].item} - Cantidad: ${ordenes[i].cantidad}, Precio: $${ordenes[i].precio}, Total: $${itemTotal}`);
    }
    console.log("- - - - - - - - -");
    console.log(`Total Final: $${total}`);

}
generarOrden(ordenes);*/

const { S } = require("@angular/cdk/keycodes");

/*const passwords = [
    "a44vddddddddadsadasd5656asd4shdd","asdt","ladgagrol","abc"
];

function validarPass(passwords){
    for(let i = 0; i < passwords.length; i++){
        const regex = /^[a-zA-Z0-9]{8,20}$/;
        if(regex.test(passwords[i])){
            console.log(`${passwords[i]} is valid.`);
        }
        else
        {
            console.log(`${passwords[i]} is invalid.`);
        }
    }
}
validarPass(passwords);*/

const stock = [
    { nombre: "Milangas", stock: 4 },
    { nombre: "TUco", stock: 2 },
    { nombre: "Kals", stock: 0 }
];

function controlarStock(stock){
    for(let i = 0; i < stock.length; i++){
        if (stock[i].stock > 0) {
            console.log(`${stock[i].nombre} is In Stock.`);
        } else {
            console.log(`${stock[i].nombre} is Out of Stock.`);
        }
    }
}

controlarStock(stock);