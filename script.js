// var Mark = {
//     fullName: 'Mark Gress',
//     mass: 180,
//     height: 1.2,
//     calcBMI: function(){
//         this.BMI = (this.mass/(this.height * this.height));
//     }
// };

// Mark.calcBMI();
// console.log(Mark.BMI)

// var John = {
//     fullName: 'John Rope',
//     mass: 220,
//     height: 1.4,
//     calcBMI: function(){
//         this.BMI = (this.mass/(this.height * this.height));
//     }
// };

// John.calcBMI();
// console.log(John.BMI)

// function highestBMI(){
//     if (John.BMI > Mark.BMI){
//         console.log(John.fullName + ' has a higher BMI than ' + Mark.fullName)
//     } else if (John.BMI === Mark.BMI) {
//         console.log(John.fullName + ' has the same BMI as ' + Mark.fullName)
//     } 
//     else {
//         console.log(Mark.fullName +' has a higher BMI than ' + John.fullName)
//     }
// }

// highestBMI();


/*
//for loop
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
    console.log(john[i])
}
//while loop
var i = 0;
while(i < john.length){
    console.log(john[i])
    i++;
}*/

//

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for (var i = 0; i < john.length; i++){
//     console.log(john[i])
// }

// for (var i = john.length - 1; i >= 0; i--){
//     console.log(john[i])
// }





// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     caclTips: function(){
//         this.tips = [];
//         this.finalvalues = [];

//         for(var i = 0; i < this.bills.length; i++) {
//             //determine percentages based on tips
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 50) {
//                 percentage = 0.20;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = 0.15;
//             } else {
//                 percentage = 0.10;
//             }

//             //add results to corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalvalues[i] = bill + (bill * percentage);
//         }
//     }
// }

// john.caclTips();
// console.log(john);


// var mark = {
//     fullName: 'Mark Miller',
//     bills: [77, 475, 110, 45],
//     caclTips: function(){
//         this.tips = [];
//         this.finalvalues = [];

//         for(var i = 0; i < this.bills.length; i++) {
//             //determine percentages based on tips
//             var percentage;
//             var bill = this.bills[i];

//             if (bill < 100) {
//                 percentage = 0.20;
//             } else if (bill >= 100 && bill < 300) {
//                 percentage = 0.10;
//             } else {
//                 percentage = 0.25;
//             }

//             //add results to corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalvalues[i] = bill + (bill * percentage);
//         }
//     }
// }


// function caclAverage(tips){
//     var sum = 0;
//     for (var i = 0; i < tips.length; i++){
//         sum = sum + tips[i]
//     }
//     return sum / tips.length;
// }



// mark.caclTips();
// console.log(mark);


// john.average = caclAverage(john.tips);
// mark.average = caclAverage(mark.tips);


// calculateAge(1990);

// function calculateAge(year){
//     console.log(2016 - year);
// }


// retirement(1990);

// var retirement = function(year){
//     console.log(65 - (2016 - year));
// }

// caclculateAge(1985);

// function caclculateAge(year){
//     console.log(2016 - year);
//     console.log(this);
// }


// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     caclculateAge: function(){
//         console.log(this);
//         console.log(2016 - this.yearOfBirth)

//         function innerFunction(){
//             console.log(this);
//         }
//         innerFunction();
//     }
// }

// john.caclculateAge();


// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984
// };

// mike.caclculateAge = john.caclculateAge;

// mike.caclculateAge();











