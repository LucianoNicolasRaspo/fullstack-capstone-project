function temperature(){
    var cel = document.getElementById("celcius").value;
    var fah = (cel * 9/5) + 32
    document.getElementById("fahrenheit").value = fah
}

function weight(){
    var kgs = document.getElementById("kilo").value;
    var lib = kgs * 2.2
    document.getElementById("libras").value = lib
}

function distances(){
    var km = document.getElementById("km").value;
    var mil = km * 0.62137
    document.getElementById("miles").value = mil
}