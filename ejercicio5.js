console.log("Ejercicio n°5");

/*
Para cada uno de los ejercicios siguientes, suponga que está comenzando con la siguiente matriz de personas.
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
1. Escriba un comando que imprima todas las personas de la lista.
2. Escriba el comando para eliminar "Dani" de la matriz.
3. Escriba el comando para eliminar "Juan" de la matriz.
4. Escribe el comando para mover "Luis" al frente del arreglo.
5. Escriba el comando para agregar su nombre al final de la matriz.
6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle. (pausa de uso)
7. Escribe el comando que da el indexOf donde se encuentra "Maria".
Al final del ejercicio, debería haber 4 personas en la formación.
*/

/////// 1 ///////
const people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

let copiaPeople = people.slice();

for(let index = 0; index < people.length; index++){
    console.log(index, people[index]);
}

/////// 2 ///////

const dani= people.indexOf("Dani");
if (dani!== -1){
    people.splice(dani,1);
}
console.log (`The new list the people is: ${people}`);

/////// 3 ///////

const juan= people.indexOf("Juan");
if (juan !== -1){
    people.splice(juan,1);
}
console.log(`The new list the people is: ${people}`);

/////// 4 ///////

let luis = people.indexOf("Luis");
if (luis !== -1) {
    let deletedPerson = people.splice(luis, 1); 
    people.unshift(deletedPerson[0]);
}
console.log(`The new list the people is: ${people}`);

/////// 5 ///////

people.push("Linda");
console.log(`The end list: ${people}`);

/////// 6 ///////

for ( let i = 1; i < people.length; i++) {
    console.log(people[i]);
    if (people [i] === "Maria") break;
    }

/////// 7 ///////    

let maria = copiaPeople.indexOf("Maria");
if (maria !== -1) {
    copiaPeople.splice(maria,1)
}
console.log(`End list: ${copiaPeople}`);