/*----AGREGAR AL ARREGLO---*/
function create(student, students) {
    students.push(student);
    return students;
}

/*---LEER ARREGLO--*/ 
function read(students) {
    students.forEach((s) => {
        console.log("Nombre: " + s.name);
        console.log("Numero de control: " + s.controlNumber);
        console.log("Email: " + s.email);
        console.log("Calificación: "+ s.grade);
    });
}

/*---------ELIMINACION POR NUMERO DE CONTROL-------------*/ 
function eraseControl(noControl, students) {
    students.forEach((s, i) => {
        if (noControl === s.controlNumber) {
            students.splice(i, 1);
        }
    });
    return students;
}

/*------ACTUALIZAR CIERTAS PROPIEDADES DE UN ESTUDIANTE---*/
function updateStudent(noControl,newStudent,students){
   students.forEach((s,i) => {
       if(noControl === s.controlNumber){
          students[i] = newStudent;
       }
   }); 
   return students;
}

/*-----------------CONSULTAR ESTUDIANTE----------------*/
function readStudent(noControl,students){
    students.forEach((s) =>{
        if(noControl === s.controlNumber){
            console.log("Nombre:" + s.name);
            console.log("Numero de control: " + s.controlNumber);
            console.log("Email: " + s.email);
            console.log("Calificación: "+ s.grade);
        }
    });
}

/*-------------LISTAR ESTUDIANTES POR CALIFICACION----*/
function listApproves(students){
    students.forEach((s) => {
        if(s.grade >= 70){
            console.log("Nombre:" + s.name);
            console.log("Numero de control: " + s.controlNumber);
            console.log("Email: " + s.email);
            console.log("Calificación: "+ s.grade);
        }
    });
}

module.exports.read = read;
module.exports.create = create;
module.exports.eraseControl = eraseControl;
module.exports.updateStudent = updateStudent;
module.exports.readStudent = readStudent;
module.exports.listApproves = listApproves;