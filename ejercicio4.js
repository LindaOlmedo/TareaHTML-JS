/* 
Exercise #4 (sugerencia filter() e includes() )
let estudiante1Cursos = ['Matemáticas', 'Inglés', 'Programación'];
let Student2Courses = ['Geografía', 'Español', 'Programación'];
Cree un programa que recorra las 2 matrices; Si hay cursos comunes, imprímalos en la consola.
*/
console.log("Ejercicio n°4");

let student1Courses = 
    ['Math', 'English', 'Programming'];
let student2Courses = 
    ['Geography', 'Spanish', 'Programming'];

const resultado = student1Courses.filter(el  => student2Courses.includes(el));
console.log ('resultado', resultado);