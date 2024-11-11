import * as rs from 'readline-sync';

const names:string[] = ["Ichi", "Oli", "Romy", "Dari", "Benji"];

const nameToFind:string = rs.question("Ingrese nombre a buscar: ");

const long = names.length;
let result : string= "No encontrado!";
for(let i = 0; i < long; i++) {
    if(names[i].toLowerCase()=== nameToFind.toLowerCase()){
        result = "Encontrado!"; 
    }
    
} 
console.log(result);
/*   ----------ATENCION-------------------
si queremos que el programa no diferencia entre mayusculas y minusculas, hay que agregar CASE INSENSITIVE, 
que sea insensible a las mayusculas y minusculas..para ello se hace una modificacio dentro del IF, en la 
comparacion....toLowerCase o toUpperCase para convertir a minusculas o mayusculas, son metodos de los dustintos
tipos de datos, en este caso string 
*/