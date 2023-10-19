var productos = ["oreo","mana","melba","pitusas","merengadas","lincoln","sonrisas"]
var precios = [750,450,320,500,730,600,450]

var productoElegido = prompt("Por favor elija un producto de la siguiente lista: " + productos)


if (productos.includes(productoElegido)){
    var cantidad = prompt("Por favor elija la cantidad que quiere comprar: ")
    alert("El monto total de su compra es: $" + (precios[productos.indexOf(productoElegido)]*cantidad))
}else{
    alert("Las galletitas que eligió no las tenemos en stock")
}

