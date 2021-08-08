                                                                    
/* USANDO SWITCH */

/*


let empresa = prompt("Ingrese Nombre de Empresa:  \n Siderar \n Aluar \n Pampa Energia")

if (empresa.toLocaleLowerCase() == 'siderar' || empresa.toLocaleLowerCase() == 'aluar' || empresa.toLocaleLowerCase() == 'pampa energia') {
    let apellido = prompt("Ingrese Apellido del empleado: ")
    let hrMes = prompt("Ingresa Hora Mes cumplida: ")
    let cat = prompt("Ingrese categoria del empleado: ")

    if (cat.toLocaleLowerCase() == "a" || cat.toLocaleLowerCase() == "b" || cat.toLocaleLowerCase() == "c") {
        switch (cat) {
            case 'a':
                let cateA = '250'
                let resultado = parseInt(cateA) * parseInt(hrMes)
                alert(apellido + "\n" + "Sueldo: " + resultado + '\n' + empresa)
                break;
            case 'b':
                let cateB = '300'
                let resultadoB = parseInt(cateB) * parseInt(hrMes)
                alert(apellido + "\n" + "Sueldo: " + resultadoB + '\n' + empresa)
                break;
            case 'c':
                let cateC = '350'
                let resultadoC = parseInt(cateC) * parseInt(hrMes)
                alert(apellido + "\n" + "Sueldo: " + resultadoC + '\n' + empresa)
                break;
        }
    }else{
        alert('La cateogria no existe \n por favor avisar a sistema')
    }
} else {
    alert("Empresa no asociada al sistema. Recargar pagina")
}


*/

/* USANDO WHILE */

/*

let entrada = prompt("Ingresar edad: ")
let sexo = prompt("Ingresa Sexo: \n Masculino \n Femenino")
let sexoParseado = sexo.toLocaleLowerCase()

while((entrada >= 18 || entrada <= 17) && sexoParseado == 'femenino'){
    if(entrada>= 18){
        alert("Puedes Ingresar")
    }else if(entrada<= 17){
        alert("No puede Ingresar")
    }
    entrada = prompt("Ingresar edad: ")
}

*/

/*  USANDO FOR */
/*

let alumnoCantidad = parseInt(prompt("Ingrese Cantidad de Alumno"))

for(i=0; i <= alumnoCantidad; i++){
    let alumno = prompt("Ingrese Apellido del Alumno: ")
    let calificacion = parseInt(prompt("Ingrese Calificacion: \n ( del 1 al 10)"))
    if(calificacion >= 7){
        alert("Aprobado")
    }else if(calificacion <= 7){
        alert("Desaprobado")
    }
}

*/
