let model = require('./student')
let students =[];

let student = {
    name: 'Blanca Ramirez Barajas',
    controlNumber: '16400985',
    email: 'blesramirezba@ittepic.edu.mx',
    grade: 90
};

let student2 = {
    name: 'Miguel Leopoldo Arciniega Ramirez',
    controlNumber: '16400881',
    email: 'blesramirezba@ittepic.edu.mx',
    grade: 69
};

students = model.create(student, students);
students = model.create(student2, students);

console.log("-------DESPUES DE INSERTAR-----");
model.read(students);
students = model.eraseControl('16400985',students);

console.log("-------DESPUES DE BORRAR------");
model.read(students);

student = {
    name: 'Edgar Alberto Valderrama Castillo',
    controlNumber: '16400986',
    email: 'blesramirezba@ittepic.edu.mx',
    grade: 100
};

students = model.create(student, students);

console.log("-------AGREGAR SEGUNDO ESTUDIANTE------");
model.read(students);

students = model.updateStudent('16400986',{name:"Daniel Ayala", controlNumber:"16400987",email:"azul.com",grade:100},students);

console.log("-------DESPUES DE ACTUALIZADO------");
model.read(students);

console.log("-----SOLICITAR VER ALUMNO POR NO. CONTROL-----");
model.readStudent('16400881',students);

console.log("----ALUMNOS APROBADOS----");
model.listApproves(students);

