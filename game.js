setInterval(function(){ move2() },60);
y = 1
function move2(){
    //Seleccion de corazon
    pe1 = document.getElementById("pers1");
    //Aumento de coordenadas
    console.log("hola mundo")
    y = y + 10;
    z = y + "px , 1   px  , 1  px , 1 px";
    console.log(z)
    pe1.style.margin-top = y + "px";
    pe1.style.margin = z;
    pe1.style.border = "1px solid white"
}























