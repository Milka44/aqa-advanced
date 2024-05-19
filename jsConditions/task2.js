  //Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case
   
  const averageGrade1 = 99;

  switch (true) {
    case averageGrade1 < 60:
      console.log("Незадовільно");
      break;
      case averageGrade1 >= 60 && averageGrade1 <= 70:
      console.log("задовільно");
      break;
      case averageGrade1 >= 71 && averageGrade1 <= 80:
      console.log("Добре");
      break;
      case averageGrade1 >= 81 && averageGrade1 <= 90:
      console.log("Дуже добре");
      break;
      case averageGrade1 >= 91  && averageGrade1 <= 100:
      console.log("Відмінно");
      break;
  }