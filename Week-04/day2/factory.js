// 90 >=A
// 80 - B
//  70 - C
// 60 >=A
// F

// let score = 85;
// let grade;

// if(score>=90){
//     grade = 'A';
// }
// else if(score>=80 && grade<90){
//     grade = 'B';
// }
// else if(score>=70 && grade<80){
//     grade = 'C';
// }
// else if(score>=60 && grade<70){
//     grade = 'D';
// }
// else{
//     grade='F';
// }

// console.log(grade);

function calculateGrade(score){
    if(score>=90){
        return "A";
    }
    else if(score>=80){
        return "B";
    }
    else if(score>=70){
        return "C";
    }
    else if (score>=60){
        return "D";
    }
    else{
        return "F";
    }
}

let grade = calculateGrade(80);
console.log(grade);