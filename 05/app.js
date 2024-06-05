function Student(initFirstName, initLastName){
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
}
Student.prototype.addGrade = function(lesson,initGrade){
    if(typeof(this.grades[lesson])=='undefined'){
        this.grades[lesson] = new Array();
        this.grades[lesson].push(initGrade);
    }else{
        this.grades[lesson].push(initGrade);
    }
}
Student.prototype.getAverageGrade = function(lesson){
    if(typeof(lesson)=='undefined'){
        let suma = 0;
        let ilosc = 0;
        for(let subject in this.grades) {
            if(this.grades.hasOwnProperty(subject)) {
                let gradesTemp = this.grades[subject];
                for(let i = 0; i < gradesTemp.length; i++) {
                    suma += gradesTemp[i];
                    ilosc++;
                }
            }
        }
        return ilosc === 0 ? 0 : (suma / ilosc);
    }else if(typeof(this.grades[lesson])=='undefined'){
        return "brak ocen z takiego przedmiotu";
    }else{
        let suma = 0;
        let gradesTemp = this.grades[lesson];
        for(let i=0;i<gradesTemp.length;i++){
            suma += gradesTemp[i];
        }
        return (suma/gradesTemp.length);
    }
}


const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
console.log(student);
const avgMath = student.getAverageGrade('maths'); // 5
const avg = student.getAverageGrade(); // 4.33
console.log(avgMath);
console.log(avg);