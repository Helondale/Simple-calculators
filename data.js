let matches = {"match1":"2:1", "match2":"3:4", "match3":"2:4"};
function evenOrOdd(string) {
    if (string % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
};
console.log(evenOrOdd(22));

function basicOperations(operation, value1, value2){
if ( operation === "+"){
    return value1 + value2
}
else if( operation === "-"){
    return value1 - value2
}
else if( operation === "/"){
    return value1 / value2 
}
else if( operation === "*"){
    return value1 * value2
}
};
console.log(basicOperations("-", 5, 3))

function totalPoints(scores){
let p1 = 0;
let p2 = 0;
for( const [key, value] of Object.entries(scores)){
let t1 = value.split(":")[0];
let t2 = value.split(":")[1];
if ( t1 > t2){
    p1 += 3 
}
else if(t2 > t1){
    p2 += 3
} else {
    p1++
    p2++
}
   
}
if ( p1 > p2){
    return "Team 1 won"
}
else if(p2 > p1){
    return "Team 2 won"
} else {
    return "Tie"
}
};
console.log(totalPoints(matches))

function largestNumber(a, b, c){
let numbers =  [
    a * (b + c),
    a * b * c, 
    a + b * c,
    (a + b) * c, 
]
return Math.max(...numbers)
};
console.log(largestNumber(1,2,3))

function index(array, number){
if (array.length < number){
    return -1
}
let cica = array[number]
return cica*cica
};
console.log(index([1,2,3,4], 2));

function quarterOfTheYear(month){
if(month <= 3){
    return "First"
}
else if(month > 3 && month <= 6){
    return "Second"
}
else if(month > 6 && month <= 9){
    return "Third"
}
else if(month > 9 && month <= 12){
    return "Fourth"
}

};
console.log(quarterOfTheYear(6));

function whichCentury(year){
    if(year < 2000){
        return "20th"
    }
    else if(year >= 2000){
        return "21th"
    }
};
console.log(whichCentury(1999))

function formTheMinimum(numbers){
numbers.sort()
let result = numbers.toString()
result = result.replaceAll(",","")
return +result
};
console.log(formTheMinimum([1,6,2]))


















// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "evenOrOdd", content: evenOrOdd, type: "function" },
        { name: "basicOperations", content: basicOperations, type: "function" },
        { name: "totalPoints", content: totalPoints, type: "function" },
        { name: "largestNumber", content: largestNumber, type: "function" },
        { name: "index", content: index, type: "function" },
        { name: "quarterOfTheYear", content: quarterOfTheYear, type: "function" },
        { name: "century", content: century, type: "function" },
        { name: "formTheMinimum", content: formTheMinimum, type: "function" }
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };

