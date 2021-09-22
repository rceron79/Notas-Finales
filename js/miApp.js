
// Solicitud de datos personales
var nombre = prompt("Ingrese su Nombre");
var apellido =prompt("Ingrese su Apellido");
var carrera = prompt("Ingrese su Carrera");
var nombre_completo = nombre+" "+apellido;


document.write("<section class='container mt-5'>")
document.write('<div id="cabecera">')
document.write('<h1>NOTAS FINALES</h1>')
document.write('<img src="../img/desafiolatam.gif" alt="logo-desafiolatam" >')
document.write('</div>')

document.write('<table class="table table table-borderless ">') //table-sm
    document.write('<tr>')
        document.write('<th>Nombre:</th>')
        document.write('<td>'+nombre_completo+'</th>')
    document.write('</tr>')

    document.write('<tr>')
        document.write('<th>Carrera:</th>')
        document.write('<td >'+carrera+'</th>')
    document.write('</tr>')

    document.write('<tr>')
        document.write('<td colspan="5">')

// Solicitud de cursos

var curso1 = prompt("Ingresa el nombre del primer curso");

var nota1Curso1 = prompt("Ingresa nota 1 " + curso1 + ":");
var nota2Curso1 = prompt("Ingresa nota 2 " + curso1 + ":");
var nota3Curso1 = prompt("Ingresa nota 3 " + curso1 + ":");
nota1Curso1 = parseFloat(nota1Curso1)
nota2Curso1 = parseFloat(nota2Curso1)
nota3Curso1 = parseFloat(nota3Curso1)
var promediocurso1 = (nota1Curso1+nota2Curso1+nota3Curso1)/3

var curso2 = prompt("Ingresa el nombre del segundo curso");

var nota1Curso2 = prompt("Ingresa nota 1 " + curso2 + ":");
var nota2Curso2 = prompt("Ingresa nota 2 " + curso2 + ":");
var nota3Curso2 = prompt("Ingresa nota 3 " + curso2 + ":");
nota1Curso2 = parseFloat(nota1Curso2)
nota2Curso2 = parseFloat(nota2Curso2)
nota3Curso2 = parseFloat(nota3Curso2)
var promediocurso2 = (nota1Curso2+nota2Curso2+nota3Curso2)/3


var curso3 = prompt("Ingresa el nombre del tercer curso");

var nota1Curso3 = prompt("Ingresa nota 1 " + curso3 + ":");
var nota2Curso3 = prompt("Ingresa nota 2 " + curso3 + ":");
//var nota3Curso3 = prompt("Ingresa la tercera nota");

nota1Curso3 = parseFloat(nota1Curso3)
nota2Curso3 = parseFloat(nota2Curso3)
var nota3Curso3 = parseFloat(0)

var promediocurso3 = (nota1Curso3+nota2Curso3+nota3Curso3)/3

var notaParaArpobar = (12-nota1Curso3-nota2Curso3)

//tabla
document.write("<table class='table'>");

document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Cursos</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr>");
document.write("</thead>");

document.write("<tbody>");

//Promedios con solo un decimal
document.write("<tr>");
document.write("<th scope='row'>"+curso1+"</th>");
document.write("<td>"+nota1Curso1+"</td>");
document.write("<td>"+nota2Curso1+"</td>");
document.write("<td>"+nota3Curso1+"</td>");
document.write("<td>"+promediocurso1.toFixed(1)+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th scope='row'>"+curso2+"</th>");
document.write("<td>"+nota1Curso2+"</td>");
document.write("<td>"+nota2Curso2+"</td>");
document.write("<td>"+nota3Curso2+"</td>");
document.write("<td>"+promediocurso2.toFixed(1)+"</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th scope='row'>"+curso3+"</th>");
document.write("<td>"+nota1Curso3+"</td>");
document.write("<td>"+nota2Curso3+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("<td>"+"-"+"</td>");
document.write("</tr>");

document.write("</tbody>");
document.write("</table>");


//Nota para aprobar
document.write("Para aprobar el ramo "+curso3+ " con nota 4, necesitas obtener un "+notaParaArpobar.toFixed(1)+ " en la nota 3." )