function mostrarValores(){
    let nombre = "Jose"
    let edad = 19;
    let esEstudiante = true;
    document.write("Nombre:", nombre, "<br>");
    document.write("Edad:", edad, "<br>");
    document.write("¿Es Estuduante?:", esEstudiante,"<br><br><hr>");


    nombre = "Juan"
    edad = 20;
    esEstudiante = false;
    document.write("Nombre:", nombre, "<br>");
    document.write("Edad:", edad, "<br>");
    document.write("¿Es Estuduante?:", esEstudiante,"<br><br><hr>");

}
function Operaciones(){
    let a = 10;
    let b = 5;
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    let igual = a == b;
    let diferente = a != b;
    let mayor = a > b;
    let menor = a < b;
    let mayorOigual = a >= b;
    let menorOigual = a <= b;
    document.write("Suma:", suma,"<br>");
    document.write("Resta:",resta,"<br>");
    document.write("Multiplicacion:",multiplicacion,"<br>");
    document.write("Division:",division,"<br><hr>");
    document.write("Igual:",igual,"<br>");
    document.write("Diferente:",diferente,"<br>");
    document.write("Mayor:",mayor,"<br>");
    document.write("Menor:",menor,"<br>");
    document.write("Mayor o Igual:",mayorOigual,"<br>");
    document.write("Menor o Igual:",menorOigual,"<br><hr>");
}
function Operadores(){
    let esMayorDeEdad = true;
    let tieneLicencia = false;
    let puedeConducir = (esMayorDeEdad && tieneLicencia);
    document.write("<h1>Bienvenidos a al curso de conduccion</h1>");
    document.write("<p>¿Puede conducir?:</p>", puedeConducir, "<br><hr>");
}