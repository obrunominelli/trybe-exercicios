const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Exercício 01
  const setKey = (object, key, value) => object[key] = value;
  setKey(lesson2, 'turno', 'noite');

  // Exercício 02
  const listObjectKeys = (object) => Object.keys(object);
  console.log(listObjectKeys(lesson1));
  console.log(listObjectKeys(lesson2));
  console.log(listObjectKeys(lesson3));

  // Exercicio 03
  const objectLenght = (object) => Object.keys(object).length;
  console.log(objectLenght(lesson1));
  console.log(objectLenght(lesson2));
  console.log(objectLenght(lesson3));

  // Exercício 04
  const listObjectValues = (object) => Object.values(object);
  console.log(listObjectValues(lesson1));
  console.log(listObjectValues(lesson2));
  console.log(listObjectValues(lesson3));

  // Exercicio 05
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  // Exercício 06
  const getAllStudents = (object) => {
    let totalOfStudents = 0;
    const array = Object.keys(object);
    for (let index in array) {
        totalOfStudents += object[array[index]].numeroEstudantes;
    }
    return totalOfStudents;
  }

  console.log(getAllStudents(allLessons));

  // Exercício 07
  const getValueByNumber = (object, number) => Object.values(object)[number];
  console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica'

  // Exercício 08
  const isKeyValue = (object, key, value) => {
    let array = Object.entries(object);
    let exists = false;
    for (let index in array) {
        if (array[index][0] === key && array[index][1] === value) exists = true;
    }
    return exists;
  }

  console.log(isKeyValue(lesson1, 'turno', 'noite'));
  console.log(isKeyValue(lesson2, 'turno', 'noite'));
  console.log(isKeyValue(lesson3, 'turno', 'noite'));

  /* BÔNUS */

  // Exercício 01
  const getAllStudentsInMathClass = (object) => {
    let totalOfStudents = 0;
    const array = Object.keys(object);
    for (let index in array) {
      if (object[array[index]].materia === 'Matemática'){
        totalOfStudents += object[array[index]].numeroEstudantes;
      }
    }
    return totalOfStudents;
  }
  console.log(getAllStudentsInMathClass(allLessons));

  // Exercício 02
  const getLessonsInfo = (object, name) => {
      const arrayAllLessons = [];
      let totalOfStudents = 0;
      const array = Object.values(object);
      for (let index in array) {
          if (array[index].professor === name) {
              arrayAllLessons.push(array[index].materia);
              totalOfStudents += array[index].numeroEstudantes;
          }
      }
      return { lessons: arrayAllLessons, students: totalOfStudents};
  }

  const createReport = (object, name) => {
      const report = {};
      report.professor = name;
      Object.assign(report, getLessonsInfo(object, name));
      return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'))
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */